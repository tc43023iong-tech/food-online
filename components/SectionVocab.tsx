
import React, { useState } from 'react';
import { QUESTIONS_VOCAB } from '../constants';
import { Check, Star } from 'lucide-react';

const SectionVocab: React.FC = () => {
  const [completed, setCompleted] = useState<number[]>([]);
  const [wrongId, setWrongId] = useState<string | null>(null);

  const handleSelect = (qId: number, selectedOption: string, correctAnswer: string) => {
    if (completed.includes(qId)) return;

    if (selectedOption === correctAnswer) {
      setCompleted([...completed, qId]);
      setWrongId(null);
    } else {
      setWrongId(`${qId}-${selectedOption}`);
      setTimeout(() => setWrongId(null), 500);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border-4 border-retro-dark rounded-3xl p-6 md:p-8 shadow-retro relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-6 bg-retro-mint/30"></div>
        <h2 className="text-4xl font-retro text-retro-dark mb-8 text-center leading-tight">
          <span className="bg-retro-pink px-4 py-1 rounded-xl border-2 border-retro-dark transform rotate-2 inline-block shadow-sm">
            Vocabulary 📖
          </span>
          <br/>
          <span className="text-3xl mt-2 block">What is this?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {QUESTIONS_VOCAB.map((q) => {
            const isDone = completed.includes(q.id);

            return (
              <div key={q.id} className="bg-retro-bg p-5 rounded-3xl border-2 border-retro-dark relative shadow-sm">
                {isDone && (
                  <div className="absolute -top-3 -right-3 bg-retro-mint text-retro-dark border-2 border-retro-dark rounded-full p-2 z-10 shadow-sm animate-bounce">
                    <Check size={28} strokeWidth={3} />
                  </div>
                )}
                
                <div className="flex flex-col items-center gap-2 mb-5 bg-white p-4 rounded-2xl border-2 border-retro-dark border-dashed">
                  <span className="text-6xl animate-pulse">{q.emoji}</span>
                  <span className="font-retro text-2xl text-gray-600 mt-2">{q.question}</span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {q.options.map((opt) => {
                    const isWrong = wrongId === `${q.id}-${opt}`;
                    const isCorrect = opt === q.answer;
                    
                    return (
                      <button
                        key={opt}
                        disabled={isDone}
                        onClick={() => handleSelect(q.id, opt, q.answer)}
                        className={`
                          w-full text-center p-3 rounded-xl border-2 border-retro-dark font-sans text-xl font-bold transition-all
                          ${isDone && isCorrect ? 'bg-retro-mint' : ''}
                          ${isDone && !isCorrect ? 'opacity-40' : ''}
                          ${!isDone && !isWrong ? 'bg-white hover:bg-retro-blue hover:text-white hover:-translate-y-1' : ''}
                          ${isWrong ? 'bg-retro-pink shake' : ''}
                        `}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionVocab;
