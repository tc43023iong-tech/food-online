
import React, { useState } from 'react';
import { QUESTIONS_A } from '../constants';
import { Check } from 'lucide-react';

const SectionA: React.FC = () => {
  const [completed, setCompleted] = useState<number[]>([]);
  const [errors, setErrors] = useState<number[]>([]);

  const handleAnswer = (id: number, correctVal: 'C' | 'U', userVal: 'C' | 'U') => {
    if (completed.includes(id)) return;

    if (correctVal === userVal) {
      setCompleted([...completed, id]);
      setErrors(errors.filter(e => e !== id));
    } else {
      setErrors([...errors, id]);
      setTimeout(() => setErrors(prev => prev.filter(e => e !== id)), 500); // Reset shake
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border-4 border-retro-dark rounded-3xl p-6 md:p-8 shadow-retro relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-6 bg-retro-blue/30"></div>
        <h2 className="text-4xl font-retro text-retro-dark mb-8 text-center leading-tight">
          <span className="bg-retro-yellow px-4 py-1 rounded-xl border-2 border-retro-dark transform -rotate-2 inline-block shadow-sm">
            Section A 🧀
          </span>
          <br/>
          <span className="text-3xl mt-2 block">Countable (C) or Uncountable (U)?</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {QUESTIONS_A.map((q) => {
            const isDone = completed.includes(q.id);
            const isError = errors.includes(q.id);

            return (
              <div 
                key={q.id} 
                className={`
                  flex items-center justify-between p-4 rounded-2xl border-2 border-retro-dark transition-all
                  ${isDone ? 'bg-retro-mint/50' : 'bg-white hover:shadow-md'}
                  ${isError ? 'shake bg-retro-pink/50' : ''}
                `}
              >
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-3xl text-retro-dark capitalize">{q.word}</span>
                </div>

                <div className="flex gap-2">
                  {isDone ? (
                    <div className="w-24 h-12 flex justify-center items-center bg-retro-mint rounded-xl border-2 border-retro-dark">
                      <Check className="text-retro-dark w-8 h-8" />
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => handleAnswer(q.id, q.answer, 'C')}
                        className="w-12 h-12 rounded-xl bg-retro-yellow border-2 border-retro-dark font-retro text-2xl hover:bg-yellow-300 active:scale-95 transition-transform"
                      >
                        C
                      </button>
                      <button
                        onClick={() => handleAnswer(q.id, q.answer, 'U')}
                        className="w-12 h-12 rounded-xl bg-retro-pink border-2 border-retro-dark font-retro text-2xl hover:bg-red-300 active:scale-95 transition-transform"
                      >
                        U
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionA;
