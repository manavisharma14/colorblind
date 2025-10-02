"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-blue-50 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full space-y-16 text-center">
        {/* Header */}
        <header className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            Color Vision Testing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Scientifically designed color vision assessments including the{" "}
            <span className="font-semibold text-gray-800">
              Ishihara Test (24-plate edition)
            </span>{" "}
            and the{" "}
            <span className="font-semibold text-gray-800">
              Hue Discrimination Test
            </span>
            . <br />
            <span className="block mt-2 text-sm text-gray-500">
              Results are for informational purposes only and not a substitute
              for professional diagnosis.
            </span>
          </p>
        </header>

        {/* Test Options */}
        <section className="text-center">
          {/* Ishihara Test */}
          <div className="p-10 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition duration-300 border border-indigo-100 text-left">
            <h2 className="text-2xl font-semibold text-gray-900">
              Ishihara Test
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              A clinically recognized screening tool for identifying red-green
              color vision deficiencies using 24 plates.
            </p>
            <Link
              href="/ishihara"
              className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium shadow hover:from-indigo-700 hover:to-blue-700 transition"
            >
              Start Ishihara Test
            </Link>
          </div>


        </section>

        {/* Footer */}
        <footer className="pt-10 border-t border-gray-200 text-sm text-gray-500">
          © {new Date().getFullYear()} Color Vision App · For educational and
          informational use only
        </footer>
      </div>
    </main>
  );
}