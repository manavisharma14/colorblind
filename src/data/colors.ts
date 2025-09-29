export interface ColorChip {
  id: number;
  rgb: [number, number, number];
}

export interface ColorBox {
  id: number;
  title: string;
  chips: ColorChip[];
}

export const colorBoxes: ColorBox[] = [
  {
    id: 1,
    title: 'Box 1',
    chips: [
      { id: 1, rgb: [88, 0, 0] },
      { id: 2, rgb: [92, 8, 8] },
      { id: 3, rgb: [96, 16, 16] },
      { id: 4, rgb: [100, 24, 24] },
      { id: 5, rgb: [104, 32, 32] },
      { id: 25, rgb: [128, 64, 64] },
    ],
  },
  {
    id: 2,
    title: 'Box 2',
    chips: [
      { id: 26, rgb: [128, 128, 0] },
      { id: 27, rgb: [132, 124, 8] },
      { id: 28, rgb: [136, 120, 16] },
      { id: 50, rgb: [64, 128, 64] },
    ],
  },
  {
    id: 3,
    title: 'Box 3',
    chips: [
      { id: 51, rgb: [0, 128, 64] },
      { id: 52, rgb: [8, 124, 68] },
      { id: 53, rgb: [16, 120, 72] },
      { id: 75, rgb: [64, 64, 128] },
    ],
  },
  {
    id: 4,
    title: 'Box 4',
    chips: [
      { id: 76, rgb: [64, 64, 128] },
      { id: 77, rgb: [60, 68, 132] },
      { id: 78, rgb: [56, 72, 136] },
      { id: 100, rgb: [88, 0, 88] },
    ],
  },
];

export const shuffleBox = (box: ColorBox): ColorChip[] => {
  const fixedStart = box.chips[0];
  const fixedEnd = box.chips[box.chips.length - 1];
  const middle = [...box.chips].slice(1, -1).sort(() => Math.random() - 0.5);
  return [fixedStart, ...middle, fixedEnd];
};

export const calculateScore = (boxes: ColorBox[]): number => {
  let totalError = 0;

  boxes.forEach((box) => {
    const correctOrder = [...box.chips].sort((a, b) => getHue(a.rgb) - getHue(b.rgb));

    box.chips.forEach((chip, i) => {
      const correctIndex = correctOrder.findIndex(c => c.id === chip.id);
      const positionError = Math.abs(i - correctIndex);
      totalError += positionError ** 2; // or use hue diff if you prefer
    });
  });

  return Math.round(Math.sqrt(totalError));
};

const getHue = (rgb: [number, number, number]): number => {
  const r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  if (max === min) return 0;
  let h;
  if (max === r) h = (g - b) / (max - min) + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / (max - min) + 2;
  else h = (r - g) / (max - min) + 4;
  return h * 60;
};