import { ishihara24 } from "../../data/ishihara24";
import { IshiharaTest } from "../../components/IshiharaTest";

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto p-4 md:p-8 space-y-6">
      <h1 className="text-3xl font-bold">Ishihara Color Vision Test</h1>
      <p className="opacity-80">24-plate edition. This is a screening tool for red–green color vision. Results are preliminary and informational.</p>
      <IshiharaTest plates={ishihara24} />
    </main>
  );
}