

'use client';

import { useState } from 'react';
import { colorBoxes, ColorBox, ColorChip } from '../../data/colors';
import Results from './Results';

export default function HueTest() {
  const [currentBoxIndex, setCurrentBoxIndex] = useState(0);
  const [shuffledBoxes, setShuffledBoxes] = useState<ColorBox[]>(colorBoxes);
  const [isComplete, setIsComplete] = useState(false);
  const [userData, setUserData] = useState({ gender: '', age: '' });

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
    console.log('Drag started - Index:', index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    console.log('Drop - Drag Index:', dragIndex, 'Drop Index:', dropIndex);

    if (dragIndex === dropIndex) return;

    const box = shuffledBoxes[currentBoxIndex];
    const newChips = [...box.chips];
    const [moved] = newChips.splice(dragIndex, 1);
    newChips.splice(dropIndex, 0, moved);
    const newBoxes = [...shuffledBoxes];
    newBoxes[currentBoxIndex] = { ...box, chips: newChips };
    setShuffledBoxes(newBoxes);
    console.log('New Chip Order:', newChips);
  };

  const nextBox = () => {
    console.log('Next Box clicked - Current Index:', currentBoxIndex);
    if (currentBoxIndex < 3) {
      setCurrentBoxIndex(currentBoxIndex + 1);
    } else {
      setIsComplete(true);
      console.log('Test finished - isComplete set to true');
    }
  };

  if (isComplete) {
    console.log('Rendering Results - Boxes:', shuffledBoxes);
    return <Results boxes={shuffledBoxes} userData={userData} setUserData={setUserData} />;
  }

  const box = shuffledBoxes[currentBoxIndex];

  return (
    <div key={currentBoxIndex} className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">What is My Color IQ?</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-center mb-6">Arrange the colors in order by hue. Drag the chips to reorder.</p>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Box {box.id}: {box.title}</h2>
          <div className="flex gap-4 justify-center p-4 bg-gray-100 rounded">
            {box.chips.map((chip: ColorChip, index: number) => (
              <div
                key={chip.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-move hover:scale-110 transition-transform"
                style={{ backgroundColor: `rgb(${chip.rgb.join(',')})` }}
              >
                {chip.id}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextBox}
          className="mt-6 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          {currentBoxIndex < 3 ? 'Next Box' : 'Finish Test'}
        </button>
      </div>
    </div>
  );
}