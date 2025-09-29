"use client";
import type { Plate, ScoredResult } from "../lib/ishihara";

export function IshiharaSummary({ result, plates }: { result: ScoredResult; plates: Plate[] }) {
  const rows = result.perPlate.map((s) => {
    const p = plates.find((x) => x.id === s.plateId)!;
    return (
      <tr key={s.plateId} className="border-b">
        <td className="p-2">{p.id}</td>
        <td className="p-2 capitalize">{p.type}</td>
        <td className="p-2">{s.user || "(blank)"}</td>
        <td className="p-2 capitalize">{s.match}</td>
        <td className="p-2">{(s.latencyMs / 1000).toFixed(1)}s{s.timedOut ? " (timeout)" : ""}</td>
      </tr>
    );
  });
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border p-4 shadow">
        <h3 className="text-xl font-semibold mb-2">Preliminary Classification</h3>
        <p className="text-lg"><span className="font-medium">{result.diagnosis.kind}</span></p>
        {"severity" in result.diagnosis && (
  <p>
    Severity:{" "}
    <span className="font-medium">
      { (result.diagnosis as { severity: string }).severity }
    </span>
  </p>
)}
        <p className="opacity-80 mt-1">{result.diagnosis.rationale}</p>
        <p className="text-xs opacity-70 mt-3">Note: Ishihara is a screening tool for red–green deficiencies. For a formal diagnosis, consult a clinician.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border p-4 shadow">
          <p className="text-sm opacity-70">Screening accuracy</p>
          <p className="text-2xl font-semibold">{result.screeningCorrect}/{result.screeningTotal}</p>
        </div>
        <div className="rounded-2xl border p-4 shadow">
          <p className="text-sm opacity-70">Diagnostic matches (protan)</p>
          <p className="text-2xl font-semibold">{result.diagnosticMatches.protan}</p>
        </div>
        <div className="rounded-2xl border p-4 shadow">
          <p className="text-sm opacity-70">Diagnostic matches (deutan)</p>
          <p className="text-2xl font-semibold">{result.diagnosticMatches.deutan}</p>
        </div>
      </div>

      <div className="rounded-2xl border overflow-x-auto shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2 text-left">Plate</th>
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">Your answer</th>
              <th className="p-2 text-left">Match</th>
              <th className="p-2 text-left">Latency</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>
  );
}