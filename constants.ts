
import { QuestionA, QuestionD, QuestionBonus, QuestionBGroup, QuestionH, QuestionC, QuestionVocab } from './types';

export const QUESTIONS_A: QuestionA[] = [
  { id: 1, word: 'ham', answer: 'U' },
  { id: 2, word: 'cheese', answer: 'U' },
  { id: 3, word: 'butter', answer: 'U' },
  { id: 4, word: 'rice', answer: 'U' },
  { id: 5, word: 'congee', answer: 'U' },
  { id: 6, word: 'soup', answer: 'U' },
  { id: 7, word: 'sugar', answer: 'U' },
  { id: 8, word: 'salt', answer: 'U' },
  { id: 9, word: 'jam', answer: 'U' },
  { id: 10, word: 'mushrooms', answer: 'C' },
  { id: 11, word: 'onions', answer: 'C' },
  { id: 12, word: 'sausages', answer: 'C' },
  { id: 13, word: 'vegetables', answer: 'C' },
  { id: 14, word: 'noodles', answer: 'C' },
];

export const QUESTIONS_B: QuestionBGroup[] = [
  {
    id: 1,
    title: 'Apple Questions',
    image: '🍎',
    options: [
      { label: 'A', text: 'apple' },
      { label: 'B', text: 'apple juice' },
      { label: 'C', text: 'apples' },
    ],
    questions: [
      { id: '1-1', text: 'There are some ____.', answer: 'C' },
      { id: '1-2', text: 'There is some ____.', answer: 'B' },
      { id: '1-3', text: 'There is an ____.', answer: 'A' },
    ]
  },
  {
    id: 2,
    title: 'Orange Questions',
    image: '🍊',
    options: [
      { label: 'A', text: 'orange' },
      { label: 'B', text: 'orange juice' },
      { label: 'C', text: 'oranges' },
    ],
    questions: [
      { id: '2-1', text: 'There is an ____.', answer: 'A' },
      { id: '2-2', text: 'There are some ____.', answer: 'C' },
      { id: '2-3', text: 'There is some ____.', answer: 'B' },
    ]
  }
];

export const WORD_BANK_D = ['a lot of', 'healthy', 'sausages', 'noodles', 'salad', 'perfect'];

export const QUESTIONS_D: QuestionD[] = [
  {
    id: 1,
    sentencePart1: 'The chef cooks a hot bowl of',
    sentencePart2: 'with beef for dinner.',
    answer: 'noodles',
  },
  {
    id: 2,
    sentencePart1: 'Look! The boy has three',
    sentencePart2: 'on his plate.',
    answer: 'sausages',
  },
  {
    id: 3,
    sentencePart1: 'My sister likes to mix corn, lettuce and tomatoes to make a',
    sentencePart2: '.',
    answer: 'salad',
  },
  {
    id: 4,
    sentencePart1: 'This chocolate cake tastes',
    sentencePart2: '! It is so sweet.',
    answer: 'perfect',
  },
  {
    id: 5,
    sentencePart1: 'Playing football every day is',
    sentencePart2: 'for our body.',
    answer: 'healthy',
  },
  {
    id: 6,
    sentencePart1: 'The shopkeeper has',
    sentencePart2: 'eggs in the big basket.',
    answer: 'a lot of',
  },
];

export const QUESTIONS_H: QuestionH[] = [
  {
    id: 1,
    segments: [
      { text: "Are", isMistake: true, correction: "Is", options: ["Is", "Do", "Does"] },
      { text: "there" },
      { text: "any" },
      { text: "sugar" },
      { text: "in" },
      { text: "the" },
      { text: "jar?" }
    ]
  },
  {
    id: 2,
    segments: [
      { text: "There" },
      { text: "are", isMistake: true, correction: "is", options: ["is", "have", "has"] },
      { text: "some" },
      { text: "juice." }
    ]
  },
  {
    id: 3,
    segments: [
      { text: "There" },
      { text: "are" },
      { text: "any", isMistake: true, correction: "some", options: ["some", "much", "a"] },
      { text: "onions." }
    ]
  },
  {
    id: 4,
    segments: [
      { text: "There" },
      { text: "is" },
      { text: "not" },
      { text: "some", isMistake: true, correction: "any", options: ["any", "a", "many"] },
      { text: "cheese." }
    ]
  },
  {
    id: 5,
    segments: [
      { text: "There" },
      { text: "are", isMistake: true, correction: "is", options: ["is", "have", "has"] },
      { text: "some" },
      { text: "yogurt." }
    ]
  },
  {
    id: 6,
    segments: [
      { text: "Is" },
      { text: "there" },
      { text: "any" },
      { text: "congee?" },
      { text: "Yes," },
      { text: "there" },
      { text: "are.", isMistake: true, correction: "is.", options: ["is.", "do.", "have."] }
    ]
  },
  {
    id: 7,
    segments: [
      { text: "There" },
      { text: "are" },
      { text: "some" },
      { text: "eggs" },
      { text: "and" },
      { text: "a" },
      { text: "lot" },
      { text: "of" },
      { text: "sausage.", isMistake: true, correction: "sausages.", options: ["sausages.", "sausage's.", "sausages"] }
    ]
  }
];

export const QUESTIONS_BONUS: QuestionBonus[] = [
  { id: 1, item: 'Cola', options: ['packet', 'can', 'bottle'], answer: 'can' },
  { id: 2, item: 'Water', options: ['slice', 'bottle', 'cup'], answer: 'bottle' },
  { id: 3, item: 'Pizza', options: ['bottle', 'can', 'slice'], answer: 'slice' },
  { id: 4, item: 'Lemon Tea', options: ['packet', 'cup', 'plate'], answer: 'cup' },
  { id: 5, item: 'French Fries', options: ['bottle', 'can', 'packet'], answer: 'packet' },
  { id: 6, item: 'Rice', options: ['bag', 'bowl', 'bottle'], answer: 'bowl' },
  { id: 7, item: 'Chocolate', options: ['can', 'bar', 'bowl'], answer: 'bar' },
  { id: 8, item: 'Milk', options: ['slice', 'plate', 'carton'], answer: 'carton' },
  { id: 9, item: 'Cereal', options: ['bottle', 'box', 'slice'], answer: 'box' },
];

export const QUESTIONS_C: QuestionC[] = [
  {
    id: 1,
    question: "Form a correct sentence.",
    correctSequence: ["There", "is", "some", "bread."],
    wordPool: ["There", "is", "some", "bread.", "are", "any"]
  },
  {
    id: 2,
    question: "Form a correct sentence.",
    correctSequence: ["Are", "there", "any", "carrots?"],
    wordPool: ["Are", "there", "any", "carrots?", "Is", "some"]
  },
  {
    id: 3,
    question: "Form a correct sentence.",
    correctSequence: ["There", "are", "a", "lot", "of", "apples."],
    wordPool: ["There", "are", "a", "lot", "of", "apples.", "is", "apple."]
  }
];

export const QUESTIONS_VOCAB: QuestionVocab[] = [
  { id: 1, emoji: '🍕', question: 'What is this?', options: ['Pizza', 'Burger', 'Rice'], answer: 'Pizza' },
  { id: 2, emoji: '🥗', question: 'What is this?', options: ['Steak', 'Salad', 'Soup'], answer: 'Salad' },
  { id: 3, emoji: '🍰', question: 'What is this?', options: ['Bread', 'Cake', 'Cookie'], answer: 'Cake' },
  { id: 4, emoji: '🍜', question: 'What is this?', options: ['Noodles', 'Spaghetti', 'Rice'], answer: 'Noodles' },
];
