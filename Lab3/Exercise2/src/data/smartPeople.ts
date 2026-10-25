
export type Scientist = {
  id: string;
  name: string;
  age: number;
  iq: number;
};

export const SMART_PEOPLE: Scientist[] = [
  {
    id: "sp-1",
    name: "Johann Goethe",
    age: 82,
    iq: 210,
  },
  {
    id: "sp-2",
    name: "Albert Einstein",
    age: 76,
    iq: 205,
  },
  {
    id: "sp-3",
    name: "Leonardo da Vinci",
    age: 67,
    iq: 180,
  },
  {
    id: "sp-4",
    name: "Isaac Newton",
    age: 84,
    iq: 190,
  },
  {
    id: "sp-5",
    name: "James Maxwell",
    age: 48,
    iq: 190,
  },
  {
    id: "sp-6",
    name: "William Sidis",
    age: 46,
    iq: 200,
  },
  {
    id: "sp-7",
    name: "Nguyen Tan Hung",
    age: 21, // Placeholder age for this exercise
    iq: 121, // User-provided sample IQ
  },
];
