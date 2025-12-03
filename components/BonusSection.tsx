
import React, { useState } from 'react';
import { QUESTIONS_BONUS } from '../constants';
import { Star } from 'lucide-react';

const BonusSection: React.FC = () => {
  const [completed, setCompleted] = useState<number[]>([]);
  
  const handleGuess = (qId: number, option: string, correctAnswer: string) => {
    if (completed.includes(qId)) return;
    
    if (option === correctAnswer) {
      setCompleted([...completed, qId]);
    } else {
        // Simple shake or error logic (optional)
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-retro-dark p-2 rounded-[2rem] shadow-retro">
        <div className="bg-white border-4 border-retro-dark rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-center gap-3 mb-8">
                <Star className="text-yellow-400 fill-current animate-spin-slow w-10 h-10" />
                <h2 className="text-4xl md:text-5xl font-retro text-retro-dark text-center tracking-wide">
                BONUS ROUND 🏆
                </h2>
                <Star className="text-yellow-400 fill-current animate-spin-slow w-10 h-10" />
            </div>
            
            <p className="text-center font-sans text-xl mb-8 text-gray-500 bg-retro-bg p-2 rounded-xl inline-block w-full">
              Match the food with its quantifier!
            </p>

            <div className="grid grid-cols-1 gap-5">
            {QUESTIONS_BONUS.map((q) => {
                const isDone = completed.includes(q.id);

                return (
                <div key={q.id} className={`transition-all duration-500 ${isDone ? 'opacity-60 scale-95' : 'opacity-100'}`}>
                    <div className="flex flex-col lg:flex-row items-center gap-6 bg-retro-bg p-6 rounded-2xl border-2 border-retro-dark shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-1 text-center lg:text-left">
                            <span className="font-retro text-3xl text-retro-dark whitespace-nowrap">
                              a <span className="text-retro-accent">______</span> of {q.item}
                            </span>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-3 w-full lg:w-auto">
                            {isDone ? (
                                <div className="bg-retro-yellow px-6 py-3 rounded-xl border-2 border-retro-dark font-bold text-2xl animate-bounce text-retro-dark min-w-[150px] text-center">
                                    {q.answer}
                                </div>
                            ) : (
                                q.options.map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => handleGuess(q.id, opt, q.answer)}
                                        className="bg-white px-5 py-3 rounded-xl border-2 border-retro-dark hover:bg-retro-pink hover:text-white transition-colors font-sans text-xl font-medium min-w-[100px]"
                                    >
                                        {opt}
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default BonusSection;
