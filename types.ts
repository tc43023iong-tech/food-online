
export interface QuestionA {
  id: number;
  word: string;
  answer: 'C' | 'U';
}

export interface QuestionBSub {
  id: string;
  text: string;
  answer: string; // 'A', 'B', or 'C'
}

export interface QuestionBGroup {
  id: number;
  title: string;
  image: string;
  options: { label: string; text: string }[];
  questions: QuestionBSub[];
}

export interface QuestionD {
  id: number;
  sentencePart1: string;
  sentencePart2: string;
  answer: string;
}

export interface QuestionBonus {
  id: number;
  item: string;
  options: string[]; // e.g., bottle, cup, etc.
  answer: string;
}

export interface Segment {
  text: string;
  isMistake?: boolean;
  correction?: string;
  options?: string[];
}

export interface QuestionH {
  id: number;
  segments: Segment[];
}

export interface QuestionC {
  id: number;
  question: string;
  correctSequence: string[];
  wordPool: string[];
}

export interface QuestionVocab {
  id: number;
  emoji: string;
  question: string;
  options: string[];
  answer: string;
}

export type Section = 'A' | 'B' | 'D' | 'Bonus' | 'H';