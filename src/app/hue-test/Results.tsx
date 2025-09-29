// src/app/hue-test/Results.tsx
"use client";

import { useState } from "react";
import { ColorBox } from "@/data/colors";
import { calculateScore } from "@/data/colors"; // ✅ Correct import path
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ResultsProps {
  boxes: ColorBox[];
  userData: { gender: string; age: string };
  setUserData: (data: { gender: string; age: string }) => void;
}

export default function Results({ boxes, userData, setUserData }: ResultsProps) {
  const [localUserData, setLocalUserData] = useState(userData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updated = { ...localUserData, [name]: value };
    setLocalUserData(updated);
    setUserData(updated);
  };

  const data = {
    labels: ["Reds/Browns", "Yellows/Greens", "Blues/Greens", "Purples/Blues"],
    datasets: [
      {
        data: boxes.map((box) => calculateScore([box])), // 👈 Using array per box
        backgroundColor: ["#ef4444", "#eab308", "#3b82f6", "#8b5cf6"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Results</h1>
      <div className="text-center mb-6">
        <p className="text-lg">
          Your total color sensitivity error score is:
          <span className="font-bold ml-2">{Math.round(calculateScore(boxes))}</span>
        </p>
        <p className="text-sm text-gray-500">Lower is better. A perfect score is 0.</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Score Summary</h2>
          <Pie data={data} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">User Data</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="gender"
              value={localUserData.gender}
              onChange={handleChange}
              placeholder="Gender"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="age"
              value={localUserData.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}