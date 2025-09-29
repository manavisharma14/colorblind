import type { Plate } from "../lib/ishihara";

// 15 number-only plates (all screening except Plate 1 demo).
// Image paths assume /public/ishihara/plate01.jpg ... plate15.jpg
export const ishihara24: Plate[] = [
  {
    id: 1,
    imageSrc: "/ishihara/1.png",
    type: "demonstration",
    expected: { normal: "12", protan: "12", deutan: "12" },
    notes: "Demonstration plate; not scored.",
  },
  // Based on your screenshots:
  { id: 2,  imageSrc: "/ishihara/2.png", type: "screening", expected: { normal: "8",  protan: "", deutan: "" } },
  { id: 3,  imageSrc: "/ishihara/3.png", type: "screening", expected: { normal: "29", protan: "", deutan: "" } },
  { id: 4,  imageSrc: "/ishihara/4.png", type: "screening", expected: { normal: "5",  protan: "", deutan: "" } },
  { id: 5,  imageSrc: "/ishihara/5.png", type: "screening", expected: { normal: "3",  protan: "", deutan: "" } },
  { id: 6,  imageSrc: "/ishihara/6.png", type: "screening", expected: { normal: "15", protan: "", deutan: "" } },
  { id: 7,  imageSrc: "/ishihara/7.png", type: "screening", expected: { normal: "74", protan: "", deutan: "" } },
  { id: 8,  imageSrc: "/ishihara/8.png", type: "screening", expected: { normal: "6",  protan: "", deutan: "" } }, // confirm from your image
  { id: 9,  imageSrc: "/ishihara/9.png", type: "screening", expected: { normal: "45", protan: "", deutan: "" } },
  { id: 10, imageSrc: "/ishihara/10.png", type: "screening", expected: { normal: "5",  protan: "", deutan: "" } }, // confirm from your image

  // Fill these 5 based on your remaining plates:
  { id: 11, imageSrc: "/ishihara/11.png", type: "screening", expected: { normal: "7", protan: "", deutan: "" } },
  { id: 12, imageSrc: "/ishihara/12.png", type: "screening", expected: { normal: "16", protan: "", deutan: "" } },
  { id: 13, imageSrc: "/ishihara/13.png", type: "screening", expected: { normal: "73", protan: "", deutan: "" } },
  { id: 14, imageSrc: "/ishihara/14.png", type: "screening", expected: { normal: "26", protan: "", deutan: "" } },
  { id: 15, imageSrc: "/ishihara/15.png", type: "screening", expected: { normal: "42", protan: "", deutan: "" } },
];

