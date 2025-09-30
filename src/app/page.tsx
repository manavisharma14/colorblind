"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6 md:p-12 space-y-8 text-center">
      <h1 className="text-4xl font-bold">Color Vision Testing</h1>
      <p className="opacity-80 text-lg">
        This app lets you take the Ishihara Test (24-plate edition) and the Hue Discrimination Test.
        Results are informational only and not a substitute for professional diagnosis.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Ishihara Test</h2>
          <div className="space-x-4 mt-2">
            <Link
              href="/ishihara"
              className="inline-block rounded-2xl bg-blue-600 text-white px-6 py-3 shadow hover:bg-blue-700"
            >
              Start Ishihara Test
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}