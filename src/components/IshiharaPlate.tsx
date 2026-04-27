"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Plate } from "../lib/ishihara";
import { Countdown } from "./Countdown";
import { ArrowRight, Eye, Clock } from "lucide-react";

export function IshiharaPlate({
  plate,
  onSubmit,
  timeLimitSec,
}: {
  plate: Plate;
  onSubmit: (answer: {
    value: string;
    latencyMs: number;
    timedOut?: boolean;
  }) => void;
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
      {/* Plate Header */}
      <div className="w-full max-w-md rounded-[28px] border border-white/70 bg-white/90 backdrop-blur-xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-emerald-50" />

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#0F6FFF] to-[#12B981] shadow-md">
              <Eye className="w-5 h-5 text-white" />
            </div>

            <div>
              <p className="text-lg font-semibold text-slate-900">
                Plate {plate.id}
              </p>

              {plate.type === "demonstration" && (
                <p className="text-sm font-medium text-[#0F6FFF]">
                  Practice Plate
                </p>
              )}
            </div>
          </div>

          {plate.type !== "demonstration" && (
            <div className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-sm text-slate-600 border border-slate-200">
              <Clock className="w-4 h-4 text-[#0F6FFF]" />
              <Countdown
                seconds={timeLimitSec}
                onElapsed={() => submit(true)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Plate Image */}
      <div className="w-full max-w-md group">
        <div className="relative rounded-[32px] bg-white p-4 shadow-2xl border border-slate-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-emerald-50/50" />

          <Image
            src={plate.imageSrc}
            alt={`Ishihara plate ${plate.id}`}
            width={800}
            height={800}
            priority
            className="relative w-full h-auto rounded-2xl transition-transform duration-300 group-hover:scale-[1.015]"
          />
        </div>
      </div>

      {/* Answer Card */}
      <div className="w-full max-w-md rounded-[28px] border border-white/70 bg-white/90 backdrop-blur-xl p-5 shadow-xl">
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What number do you see?
        </label>

        <div className="flex gap-3">
          <input
            type="text"
            inputMode="numeric"
            maxLength={2}
            placeholder="12"
            value={value}
            onChange={(e) =>
              setValue(e.target.value.replace(/\D/g, ""))
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit(false);
            }}
            className={`
              flex-1 rounded-2xl border-2 p-4 text-lg font-semibold text-center outline-none transition-all duration-200
              ${
                isFocused
                  ? "border-[#0F6FFF] bg-blue-50 shadow-lg shadow-blue-100"
                  : "border-slate-200 hover:border-blue-300"
              }
            `}
          />

          <button
            onClick={() => submit(false)}
            className="px-6 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#0F6FFF] via-[#06B6D4] to-[#12B981] hover:shadow-xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
          >
            <ArrowRight className="w-5 h-5" />
            Next
          </button>
        </div>

        <p className="text-xs text-slate-500 mt-3 text-center">
          Leave blank if no number is visible
        </p>
      </div>

      {/* Instruction Note */}
      <div className="w-full max-w-md rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-emerald-50 px-4 py-4 shadow-sm">
        <p className="text-xs text-slate-700 text-center leading-6">
          👁️ View at 75cm distance • Use daylight lighting • Disable screen
          filters
        </p>
      </div>
    </div>
  );
}