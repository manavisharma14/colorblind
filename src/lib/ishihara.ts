export type PlateType =
  | "demonstration"   // e.g., Plate 1 (12). Not scored.
  | "screening"       // used for normal vs RG deficiency screening
  | "diagnostic"      // differentiates protan vs deutan
  | "tritan_check"    // optional, rarely in Ishihara; included for completeness
  | "control";        // control/trace lines (not common in 24-plate), not scored

export type ExpectedMap = {
  normal: string | null;   // numeral/pattern a person with normal color vision sees
  protan: string | null;   // typical protan response
  deutan: string | null;   // typical deutan response
  tritan?: string | null;  // rarely used here – keep optional
  hidden?: string | null;  // when figure is hidden to normals
};

export type Plate = {
  id: number;              // 1..24
  imageSrc: string;        // path to your image asset
  type: PlateType;
  expected: ExpectedMap;
  accept?: string[];       // alternate acceptable inputs
  timeLimitSec?: number;   // per-plate time limit (default set globally)
  notes?: string;          // optional reference note (e.g., manual page)
};

export type UserAnswer = {
  plateId: number;
  value: string;           // user's typed answer; use "none" if they saw nothing
  latencyMs: number;       // time taken to answer
  timedOut?: boolean;
};

export type ScoringThresholds = {
  minScreeningCorrectForNormal: number; // e.g., 12 if you have 14 screening plates
  minDiagnosticMargin: number;          // subtype requires at least this margin
  defaultTimeLimitSec: number;          // e.g., 5 (Ishihara suggests ~3 sec viewing)
};

export type PlateScore = {
  plateId: number;
  user: string;             // normalized user response
  match: "normal" | "protan" | "deutan" | "tritan" | "hidden" | "none" | "mismatch";
  timedOut?: boolean;
  latencyMs: number;
  plateType: PlateType;
};

export type Diagnosis =
  | { kind: "Normal"; rationale: string }
  | { kind: "Protan"; severity: "mild" | "moderate" | "severe"; rationale: string }
  | { kind: "Deutan"; severity: "mild" | "moderate" | "severe"; rationale: string }
  | { kind: "Red-Green Deficiency (Undetermined Type)"; severity: "mild" | "moderate" | "severe"; rationale: string }
  | { kind: "Inconclusive"; rationale: string };

export type ScoredResult = {
  perPlate: PlateScore[];
  screeningCorrect: number;
  screeningTotal: number;
  diagnosticMatches: { protan: number; deutan: number; tritan: number };
  diagnosis: Diagnosis;
};

export function normalizeInput(raw: string): string {
  return raw.trim().toLowerCase();
}

export function scorePlate(userValue: string, plate: Plate, latencyMs: number, timedOut?: boolean): PlateScore {
  const v = normalizeInput(userValue);
  const user = v === "" ? "none" : v;

  let match: PlateScore["match"] = "mismatch";
  const exp = plate.expected;

  const equals = (a?: string | null) => (a ? normalizeInput(a) === user : false);

  if (user === "none") match = "none";
  else if (equals(exp.normal)) match = "normal";
  else if (equals(exp.protan)) match = "protan";
  else if (equals(exp.deutan)) match = "deutan";
  else if (equals(exp.tritan)) match = "tritan";
  else if (equals(exp.hidden)) match = "hidden";
  else if (plate.accept && plate.accept.map(normalizeInput).includes(user)) match = "normal";

  return {
    plateId: plate.id,
    user,
    match,
    latencyMs,
    timedOut,
    plateType: plate.type,
  };
}

export function isScreening(plate: Plate): boolean {
  return plate.type === "screening";
}

export function isDiagnostic(plate: Plate): boolean {
  return plate.type === "diagnostic";
}

export function severityFromScreening(screeningCorrect: number, screeningTotal: number): "mild" | "moderate" | "severe" {
  const pct = screeningTotal > 0 ? screeningCorrect / screeningTotal : 0;
  if (pct >= 0.66) return "mild";       // ≥66% correct
  if (pct >= 0.33) return "moderate";   // 33–65%
  return "severe";                       // <33%
}

export function computeDiagnosis(scores: PlateScore[], plates: Plate[], thresholds: ScoringThresholds): ScoredResult {
  const screeningPlates = plates.filter(isScreening);
  // const diagnosticPlates = plates.filter(isDiagnostic);

  let screeningCorrect = 0;
  const screeningTotal = screeningPlates.length;

  let protanDiag = 0;
  let deutanDiag = 0;
  let tritanDiag = 0;

  for (const s of scores) {
    const plate = plates.find(p => p.id === s.plateId);
    if (!plate) continue;

    if (plate.type === "screening") {
      if (s.match === "normal") screeningCorrect++;
    }
    if (plate.type === "diagnostic") {
      if (s.match === "protan") protanDiag++;
      if (s.match === "deutan") deutanDiag++;
      if (s.match === "tritan") tritanDiag++;
    }
  }

  const screeningSuggestsNormal = screeningCorrect >= thresholds.minScreeningCorrectForNormal;

  let diagnosis: Diagnosis = { kind: "Inconclusive", rationale: "Insufficient data to classify." };

  if (screeningSuggestsNormal) {
    const diff = Math.abs(protanDiag - deutanDiag);
    if (protanDiag === 0 && deutanDiag === 0) {
      diagnosis = {
        kind: "Normal",
        rationale: `Screening: ${screeningCorrect}/${screeningTotal} ≥ ${thresholds.minScreeningCorrectForNormal}. No diagnostic pattern indicating RG deficiency.`,
      };
    } else if (diff >= thresholds.minDiagnosticMargin) {
      const type = protanDiag > deutanDiag ? "Protan" : "Deutan";
      diagnosis = {
        kind: type,
        severity: "mild",
        rationale: `Screening near/within normal (${screeningCorrect}/${screeningTotal}), but diagnostics favor ${type.toLowerCase()} (margin ${diff}).`,
      } as Diagnosis;
    } else {
      diagnosis = {
        kind: "Normal",
        rationale: `Screening normal (${screeningCorrect}/${screeningTotal}). Diagnostic signals mixed (protan=${protanDiag}, deutan=${deutanDiag}).`,
      };
    }
  } else {
    const diff = Math.abs(protanDiag - deutanDiag);
    const sev = severityFromScreening(screeningCorrect, screeningTotal);
    if (diff >= thresholds.minDiagnosticMargin) {
      const type = protanDiag > deutanDiag ? "Protan" : "Deutan";
      diagnosis = {
        kind: type,
        severity: sev,
        rationale: `Screening below normal (${screeningCorrect}/${screeningTotal}). Diagnostics favor ${type.toLowerCase()} (protan=${protanDiag}, deutan=${deutanDiag}, margin=${diff}). Severity by screening accuracy (${sev}).`,
      } as Diagnosis;
    } else {
      diagnosis = {
        kind: "Red-Green Deficiency (Undetermined Type)",
        severity: sev,
        rationale: `Screening below normal (${screeningCorrect}/${screeningTotal}); diagnostic plates inconclusive (protan=${protanDiag}, deutan=${deutanDiag}).`,
      } as Diagnosis;
    }
  }

  return {
    perPlate: scores,
    screeningCorrect,
    screeningTotal,
    diagnosticMatches: { protan: protanDiag, deutan: deutanDiag, tritan: tritanDiag },
    diagnosis,
  };
}

export const DefaultThresholds: ScoringThresholds = {
  minScreeningCorrectForNormal: 12, // tune to your screening set size
  minDiagnosticMargin: 2,
  defaultTimeLimitSec: 5,
};