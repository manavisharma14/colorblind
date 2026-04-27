// src/types/ScoredResult.ts

import type { PlateScore, Diagnosis } from "@/lib/ishihara";

export type ScoredResult = {
  /** Individual scored response for each plate */
  perPlate: PlateScore[];

  /** Number of screening plates answered correctly */
  screeningCorrect: number;

  /** Total screening plates */
  screeningTotal: number;

  /** Diagnostic subtype counts */
  diagnosticMatches: {
    protan: number;
    deutan: number;
    tritan: number;
  };

  /** Final interpreted diagnosis */
  diagnosis: Diagnosis;
};