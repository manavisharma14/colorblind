"use client";
import { useEffect, useState } from "react";

export function Countdown({ seconds, onElapsed }: { seconds: number; onElapsed: () => void }) {
  const [remaining, setRemaining] = useState(seconds);
  useEffect(() => {
    setRemaining(seconds);
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(id);
          onElapsed();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [seconds, onElapsed]);
  return <div className="text-sm opacity-70">Time: {remaining}s</div>;
}