"use client";

import { useState, useEffect } from "react";
import { ColorBox, calculateScore } from "@/data/colors";
import { useRouter } from "next/navigation";

// Define the ResultsProps interface
interface ResultsProps {
  boxes: ColorBox[];
  userData: { gender: string; age: string };
  setUserData: (data: { gender: string; age: string }) => void;
}

export default function Results({ boxes, userData, setUserData }: ResultsProps) {
  const [localUserData, setLocalUserData] = useState(userData);
  const router = useRouter();

  const totalScore = calculateScore(boxes);
  const perZoneScores = boxes.map((box) => calculateScore([box]));

  useEffect(() => {
    const payload = {
      boxes,
      userData: localUserData,
      totalScore,
      perZoneScores,
    };
    sessionStorage.setItem("hue_scores", JSON.stringify(payload));
  }, [boxes, localUserData, totalScore, perZoneScores]);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   const updated = { ...localUserData, [name]: value };
  //   setLocalUserData(updated);
  //   setUserData(updated);
  // };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Results</h1>
      <div className="text-center mb-6">
        <p className="text-lg">
          Your total color sensitivity error score is: <span className="font-bold ml-2">{Math.round(totalScore)}</span>
        </p>
        <p className="text-sm text-gray-500">Lower is better. A perfect score is 0.</p>
      </div>
      <div className="text-center">
        <button
          onClick={() => router.push("/final-results")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          View Combined Analysis →
        </button>
      </div>
    </div>
  );
}