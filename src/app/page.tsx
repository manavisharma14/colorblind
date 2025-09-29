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
            <Link
              href="/ishihara/results"
              className="inline-block rounded-2xl border px-6 py-3 shadow hover:bg-gray-50"
            >
              View Last Ishihara Results
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Hue Discrimination Test</h2>
          <p className="opacity-80 text-md mt-2">
            Arrange colored tiles in order of hue to test your ability to distinguish subtle color differences.
          </p>
          <div className="space-x-4 mt-2">
            <Link
              href="/hue-test"
              className="inline-block rounded-2xl bg-blue-600 text-white px-6 py-3 shadow hover:bg-blue-700"
            >
              Start Hue Test
            </Link>
            {/* <Link
              href="/hue/results"
              className="inline-block rounded-2xl border px-6 py-3 shadow hover:bg-gray-50"
            >
              View Last Hue Test Results
            </Link> */}
          </div>
        </div>
      </div>
    </main>
  );
}