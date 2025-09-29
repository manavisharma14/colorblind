"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Plate } from "../lib/ishihara";
import { Countdown } from "./Countdown";

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
  const startedAt = useRef<number>(Date.now());

  useEffect(() => {
    startedAt.current = Date.now();
    setValue("");
  }, [plate.id]);

  const submit = (timedOut?: boolean) => {
    const latencyMs = Date.now() - startedAt.current;
    onSubmit({ value, latencyMs, timedOut });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <p className="text-lg font-medium">Plate {plate.id}</p>
        {plate.type !== "demonstration" && (
          <p className="text-xs opacity-70">Please answer within ~{timeLimitSec}s</p>
        )}
      </div>
      <div className="w-full max-w-md">
        <Image
          src={plate.imageSrc}
          alt={`Ishihara plate ${plate.id}`}
          width={800}
          height={800}
          className="w-full h-auto rounded-2xl shadow"
          priority
        />
      </div>
      {plate.type !== "demonstration" && (
        <Countdown seconds={timeLimitSec} onElapsed={() => submit(true)} />
      )}
      <div className="flex items-center gap-2 w-full max-w-md">
        <input
          type="text"
          inputMode="numeric"
          placeholder="Type the number (leave blank if none)"
          className="flex-1 rounded-2xl border p-3"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') submit(false); }}
        />
        <button onClick={() => submit(false)} className="rounded-2xl border px-4 py-2 shadow">
          Next
        </button>
      </div>
      <p className="text-xs text-center opacity-60">Use neutral lighting. Disable Night Shift/True Tone/blue filters.</p>
    </div>
  );
}