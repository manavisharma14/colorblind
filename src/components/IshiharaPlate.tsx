"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Plate } from "../lib/ishihara";
import { Countdown } from "./Countdown";
import { ArrowRight, Eye, Clock} from "lucide-react";

export function IshiharaPlate({
  plate,
  onSubmit,
  timeLimitSec,
}: {
  plate: Plate;
  onSubmit: (answer: { value: string; latencyMs: number; timedOut?: boolean }) => void;
  timeLimitSec: number;
}) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const startedAt = useRef<number>(Date.now());

  useEffect(() => {
    startedAt.current = Date.now();
    setValue("");
    setIsFocused(false);
  }, [plate.id]);

  const submit = (timedOut?: boolean) => {
    const latencyMs = Date.now() - startedAt.current;
    onSubmit({ value, latencyMs, timedOut });
  };

  return (
    <div className="flex flex-col items-center gap-6 animate-fade-in-up">
      {/* Plate Info */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-indigo-100 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">Plate {plate.id}</p>
              {plate.type === "demonstration" && (
                <p className="text-sm text-indigo-600">Practice Plate</p>
              )}
            </div>
          </div>
          
          {plate.type !== "demonstration" && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <Countdown seconds={timeLimitSec} onElapsed={() => submit(true)} />
            </div>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="w-full max-w-md group">
        <div className="relative bg-white rounded-3xl p-4 shadow-2xl border-4 border-white/50">
          <Image
            src={plate.imageSrc}
            alt={`Ishihara plate ${plate.id}`}
            width={800}
            height={800}
            className="w-full h-auto rounded-2xl transition-transform group-hover:scale-[1.02] duration-300"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-2xl transition-colors" />
        </div>
      </div>

      {/* Input */}
      <div className="w-full max-w-md space-y-4">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-indigo-100 shadow-xl">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What number do you see?
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              inputMode="numeric"
              maxLength={2}
              placeholder="12"
              className={`
                flex-1 rounded-xl border-2 p-4 text-lg font-semibold text-center
                transition-all duration-200
                ${isFocused 
                  ? "border-indigo-500 shadow-lg shadow-indigo-100 bg-indigo-50" 
                  : "border-gray-200 hover:border-indigo-300"
                }
              `}
              value={value}
              onChange={(e) => setValue(e.target.value.replace(/\D/g, ''))}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={(e) => { if (e.key === 'Enter') submit(false); }}
            />
            <button
              onClick={() => submit(false)}
              className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
            >
              <ArrowRight className="w-5 h-5" />
              Next
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Leave blank if you see no number
          </p>
        </div>
      </div>

      {/* Instructions */}
      <div className="w-full max-w-md bg-blue-50/80 backdrop-blur-xl rounded-xl p-4 border border-blue-100">
        <p className="text-xs text-blue-800 text-center">
          👁️ View at 75cm distance • Use daylight lighting • Disable screen filters
        </p>
      </div>
    </div>
  );
}