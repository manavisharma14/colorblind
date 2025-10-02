export interface ColorChip {
  id: number;
  rgb: [number, number, number];
}

export interface ColorBox {
  id: number;
  title: string;
  chips: ColorChip[];
}

// Utility to convert hex to RGB tuple
const hexToRgb = (hex: string): [number, number, number] => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
};

// Correct rows converted to ColorChip[]
const correctRow1 = [
  "#B2766F", "#A97E4C", "#B17466", "#A87452", "#A28946",
  "#A78244", "#AE725F", "#A8794E", "#A8745A", "#9D8E48"
].map((hex, i) => ({ id: i + 1, rgb: hexToRgb(hex) }));

const correctRow2 = [
  "#97914b", "#86955c", "#7e9760", "#589480", "#7c9567",
  "#5b947a", "#699a71", "#8d9352", "#649a76", "#529687"
].map((hex, i) => ({ id: i + 11, rgb: hexToRgb(hex) }));

const correctRow3 = [
  "#4e9689", "#6090a5", "#7489a7", "#688fa7", "#4a9698",
  "#4c9691", "#6c8aa6", "#52949f", "#4a9696", "#7b84a3"
].map((hex, i) => ({ id: i + 21, rgb: hexToRgb(hex) }));

const correctRow4 = [
  "#8484a3", "#b1757f", "#ae7787", "#99819d", "#9f7f98",
  "#8d85a3", "#a9798b", "#9483a0", "#b3757a", "#b37673"
].map((hex, i) => ({ id: i + 31, rgb: hexToRgb(hex) }));

export const colorBoxes: ColorBox[] = [
  { id: 1, title: "Box 1", chips: correctRow1 },
  { id: 2, title: "Box 2", chips: correctRow2 },
  { id: 3, title: "Box 3", chips: correctRow3 },
  { id: 4, title: "Box 4", chips: correctRow4 }
];

// Shuffle only middle chips, keep first/last fixed
export const shuffleBox = (box: ColorBox): ColorChip[] => {
  const fixedStart = box.chips[0];
  const fixedEnd = box.chips[box.chips.length - 1];
  const middle = [...box.chips].slice(1, -1).sort(() => Math.random() - 0.5);
  return [fixedStart, ...middle, fixedEnd];
};

export const getHue = (rgb: [number, number, number]): number => {
  const [r, g, b] = rgb.map(c => c / 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  if (max === min) return 0;

  let h: number;
  if (max === r) h = (g - b) / (max - min) + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / (max - min) + 2;
  else h = (r - g) / (max - min) + 4;

  return h * 60;
};

export const calculateScore = (boxes: ColorBox[]): number => {
  let totalError = 0;

  boxes.forEach((box) => {
    const correctOrder = [...box.chips].sort(
      (a, b) => getHue(a.rgb) - getHue(b.rgb)
    );

    box.chips.forEach((chip, i) => {
      const correctIndex = correctOrder.findIndex((c) => c.id === chip.id);
      const positionError = Math.abs(i - correctIndex);
      totalError += positionError; // absolute error, not squared
    });
  });

  return totalError; // raw sum, lower = better
};

