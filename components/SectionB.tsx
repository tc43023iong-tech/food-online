
import React, { useState } from 'react';
import { QUESTIONS_B } from '../constants';
import { Check } from 'lucide-react';

const SectionB: React.FC = () => {
  const [completed, setCompleted] = useState<string[]>([]);
  const [wrongId, setWrongId] = useState<string | null>(null);

  const handleSelect = (questionId: string, optionLabel: string, correctAnswer: string) => {
    if (completed.includes(questionId)) return;

    if (optionLabel === correctAnswer) {
      setCompleted([...completed, questionId]);
      setWrongId(null);
    } else {
      setWrongId(questionId);
      setTimeout(() => setWrongId(null), 500);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border-4 border-retro-dark rounded-3xl p-6 md:p-8 shadow-retro">
        <h2 className="text-4xl font-retro text-retro-dark mb-8 text-center leading-tight">
          <span className="bg-retro-pink px-4 py-1 rounded-xl border-2 border-retro-dark transform rotate-2 inline-block shadow-sm">
            Section B 🍊
          </span>
          <br/>
          <span className="text-3xl mt-2 block">Complete the sentences!</span>
        </h2>

        <div className="space-y-12">
          {QUESTIONS_B.map((group) => (
            <div key={group.id} className="bg-retro-bg p-6 md:p-8 rounded-3xl border-2 border-retro-dark shadow-sm relative">
               {/* Decorative header for the group */}
               <div className="absolute -top-5 left-8 bg-white px-4 py-2 border-2 border-retro-dark rounded-xl shadow-retro-sm flex items-center gap-2">
                  <span className="text-3xl">{group.image}</span>
                  <span className="font-retro text-2xl text-retro-dark">{group.title}</span>
               </div>

               {/* Options Box */}
               <div className="mt-4 mb-8 bg-white p-4 rounded-2xl border-2 border-retro-dark border-dashed flex flex-wrap justify-center gap-4 md:gap-8">
                  {group.options.map(opt => (
                    <div key={opt.label} className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-retro-dark text-white font-retro text-xl flex items-center justify-center">
                          {opt.label}
                        </span>
                        <span className="font-sans text-2xl font-bold text-retro-dark">
                          {opt.text}
                        </span>
                    </div>
                  ))}
               </div>

               {/* Questions List */}
               <div className="space-y-4">
                  {group.questions.map((q, idx) => {
                    const isDone = completed.includes(q.id);
                    const isError = wrongId === q.id;

                    return (
                      <div 
                        key={q.id}
                        className={`
                          p-4 rounded-xl border-2 border-retro-dark transition-all duration-300
                          ${isDone ? 'bg-retro-mint/40' : 'bg-white'}
                          ${isError ? 'shake bg-red-100' : ''}
                        `}
                      >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                          <div className="text-xl md:text-2xl font-sans font-medium text-center md:text-left flex-1">
                             <span className="font-retro text-retro-accent mr-3">{idx + 1}.</span>
                             {q.text}
                          </div>

                          <div className="flex gap-2">
                            {isDone ? (
                              <div className="flex items-center gap-2 bg-retro-mint px-4 py-2 rounded-lg border-2 border-retro-dark">
                                <span className="font-retro font-bold text-xl">{q.answer}</span>
                                <Check size={20} />
                              </div>
                            ) : (
                              <div className="flex gap-2">
                                {group.options.map(opt => (
                                  <button
                                    key={opt.label}
                                    onClick={() => handleSelect(q.id, opt.label, q.answer)}
                                    className="w-12 h-12 rounded-lg border-2 border-retro-dark bg-retro-yellow hover:bg-yellow-300 active:scale-95 font-retro text-2xl transition-transform"
                                  >
                                    {opt.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionB;
