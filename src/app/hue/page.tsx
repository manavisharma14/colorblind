"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  colorBoxes,
  ColorBox,
  ColorChip,
  shuffleBox,
  calculateScore,
} from "../../data/colors";
import {
  ArrowRight,
  GripVertical,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

/* ------------------------------ MAIN TEST ------------------------------ */

export default function HueTest() {
  const [currentBoxIndex, setCurrentBoxIndex] = useState(0);

  const [shuffledBoxes, setShuffledBoxes] = useState<ColorBox[]>(
    colorBoxes.map((box) => ({
      ...box,
      chips: shuffleBox(box),
    }))
  );

  const [isComplete, setIsComplete] = useState(false);
  const [userData] = useState({
    gender: "",
    age: "",
  });

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.dataTransfer.setData(
      "text/plain",
      index.toString()
    );
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    dropIndex: number
  ) => {
    e.preventDefault();

    const dragIndex = parseInt(
      e.dataTransfer.getData("text/plain"),
      10
    );

    if (dragIndex === dropIndex) return;

    const box = shuffledBoxes[currentBoxIndex];
    const newChips = [...box.chips];

    const [moved] = newChips.splice(
      dragIndex,
      1
    );

    newChips.splice(dropIndex, 0, moved);

    const newBoxes = [...shuffledBoxes];

    newBoxes[currentBoxIndex] = {
      ...box,
      chips: newChips,
    };

    setShuffledBoxes(newBoxes);
  };

  const nextBox = () => {
    if (
      currentBoxIndex <
      colorBoxes.length - 1
    ) {
      setCurrentBoxIndex(
        currentBoxIndex + 1
      );
    } else {
      setIsComplete(true);
    }
  };

  if (isComplete) {
    return (
      <Results
        boxes={shuffledBoxes}
        userData={userData}
      />
    );
  }

  const box =
    shuffledBoxes[currentBoxIndex];

  const progress =
    ((currentBoxIndex + 1) /
      colorBoxes.length) *
    100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-5">
            <Sparkles className="w-4 h-4" />
            Advanced Hue Assessment
          </div>

          <h1 className="text-5xl font-semibold tracking-tight text-slate-900">
            What is My Color IQ?
          </h1>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto leading-7">
            Arrange the colors smoothly by hue.
            Drag each chip into the correct
            order.
          </p>
        </div>

        {/* Progress */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6">
          <div className="flex justify-between text-sm mb-3">
            <span className="text-slate-600 font-medium">
              Box {currentBoxIndex + 1} of{" "}
              {colorBoxes.length}
            </span>

            <span className="text-blue-600 font-semibold">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#0F6FFF] via-[#06B6D4] to-[#12B981] transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* Test Card */}
        <div className="rounded-[32px] bg-white border border-slate-200 shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-1">
            Box {box.id}
          </h2>

          <p className="text-slate-500 mb-8">
            {box.title}
          </p>

          <div className="flex flex-wrap justify-center gap-4 rounded-3xl bg-slate-50 p-6">
            {box.chips.map(
              (
                chip: ColorChip,
                index: number
              ) => {
                const isFixed =
                  index === 0 ||
                  index ===
                    box.chips.length -
                      1;

                return (
                  <div
                    key={chip.id}
                    draggable={!isFixed}
                    onDragStart={(
                      e
                    ) =>
                      !isFixed &&
                      handleDragStart(
                        e,
                        index
                      )
                    }
                    onDragOver={(
                      e
                    ) =>
                      !isFixed &&
                      handleDragOver(
                        e
                      )
                    }
                    onDrop={(e) =>
                      !isFixed &&
                      handleDrop(
                        e,
                        index
                      )
                    }
                    className={`w-16 h-16 rounded-full border-4 transition-all duration-200 flex items-center justify-center ${
                      isFixed
                        ? "border-slate-400 cursor-not-allowed"
                        : "border-white cursor-move hover:scale-110 shadow-md"
                    }`}
                    style={{
                      backgroundColor: `rgb(${chip.rgb.join(
                        ","
                      )})`,
                    }}
                  >
                    {!isFixed && (
                      <GripVertical className="w-4 h-4 text-white/80" />
                    )}
                  </div>
                );
              }
            )}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={nextBox}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#0F6FFF] via-[#06B6D4] to-[#12B981] hover:shadow-xl transition-all"
            >
              {currentBoxIndex <
              colorBoxes.length - 1
                ? "Next Box"
                : "Finish Test"}

              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ RESULTS ------------------------------ */

interface ResultsProps {
  boxes: ColorBox[];
  userData: {
    gender: string;
    age: string;
  };
}

function Results({
  boxes,
  userData,
}: ResultsProps) {
  const router = useRouter();

  const totalScore =
    calculateScore(boxes);

  const perZoneScores = boxes.map(
    (box) => calculateScore([box])
  );

  useEffect(() => {
    sessionStorage.setItem(
      "hue_scores",
      JSON.stringify({
        boxes,
        userData,
        totalScore,
        perZoneScores,
      })
    );
  }, [
    boxes,
    userData,
    totalScore,
    perZoneScores,
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-[32px] bg-white border border-slate-200 shadow-xl p-10 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0F6FFF] to-[#12B981] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl font-semibold text-slate-900 mb-4">
            Hue Test Complete
          </h1>

          <p className="text-slate-600 leading-7 mb-8">
            Your total color sensitivity
            error score:
          </p>

          <div className="text-6xl font-bold bg-gradient-to-r from-[#0F6FFF] to-[#12B981] bg-clip-text text-transparent mb-4">
            {Math.round(totalScore)}
          </div>

          <p className="text-sm text-slate-500 mb-10">
            Lower is better. A perfect
            score is 0.
          </p>

          <button
            onClick={() =>
              router.push(
                "/final-results"
              )
            }
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#0F6FFF] via-[#06B6D4] to-[#12B981] hover:shadow-xl transition-all"
          >
            View Combined Analysis
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}