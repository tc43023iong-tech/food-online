import React, { useState } from 'react';
import { QUESTIONS_D, WORD_BANK_D } from '../constants';
import { Check } from 'lucide-react';

const SectionD: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [completed, setCompleted] = useState<number[]>([]);

  const handleSelectWord = (qId: number, word: string) => {
    if (completed.includes(qId)) return;
    setAnswers(prev => ({ ...prev, [qId]: word }));
    
    // Auto check
    const question = QUESTIONS_D.find(q => q.id === qId);
    if (question && word === question.answer) {
       // Correct
       setCompleted(prev => [...prev, qId]);
    } else {
      // Incorrect - visual feedback handled by styles
      setTimeout(() => {
        setAnswers(prev => {
          const newState = { ...prev };
          delete newState[qId];
          return newState;
        });
      }, 800);
    }
  };

  const usedWords = Object.keys(answers).map(k => {
     const qId = parseInt(k);
     if(completed.includes(qId)) return answers[qId];
     return null;
  }).filter(Boolean);

  return (
    <div className="space-y-6">
      <div className="bg-white border-4 border-retro-dark rounded-3xl p-6 md:p-8 shadow-retro">
        <h2 className="text-4xl font-retro text-retro-dark mb-8 text-center leading-tight">
          <span className="bg-retro-purple px-4 py-1 rounded-xl border-2 border-retro-dark transform rotate-1 inline-block shadow-sm">
            Section D 🌽
          </span>
          <br/>
          <span className="text-3xl mt-2 block">Fill in the blanks!</span>
        </h2>

        {/* Word Bank */}
        <div className="bg-retro-bg p-6 rounded-2xl border-2 border-retro-dark border-dashed mb-8">
          <h3 className="font-retro text-2xl text-center mb-4 text-gray-500">- Word Bank -</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {WORD_BANK_D.map((word) => {
              const isUsed = usedWords.includes(word);
              return (
                <div 
                  key={word}
                  className={`
                    px-4 py-2 rounded-xl border-2 border-retro-dark font-sans font-bold text-xl bg-white
                    ${isUsed ? 'opacity-40 decoration-line-through' : 'shadow-sm'}
                  `}
                >
                  {word}
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          {QUESTIONS_D.map((q) => {
            const isDone = completed.includes(q.id);
            const currentAnswer = answers[q.id];
            const isWrong = currentAnswer && currentAnswer !== q.answer;

            return (
              <div key={q.id} className="p-6 rounded-2xl border-2 border-retro-dark bg-white relative shadow-sm hover:shadow-md transition-shadow">
                 {isDone && (
                  <div className="absolute top-2 right-2 text-green-500">
                    <Check size={32} />
                  </div>
                )}
                <div className="font-sans text-xl md:text-2xl leading-loose">
                  <span className="font-retro text-retro-accent mr-2">{q.id}.</span>
                  {q.sentencePart1}{' '}
                  <span className="inline-block relative align-middle">
                    {/* The Drop Zone / Input Display */}
                    <div 
                      className={`
                        inline-flex items-center justify-center min-w-[120px] h-12 px-3 
                        border-b-4 border-retro-dark mx-1 rounded-lg text-center font-bold text-retro-accent text-xl
                        transition-colors
                        ${isDone ? 'bg-retro-mint/30 border-b-2' : 'bg-gray-100'}
                        ${isWrong ? 'bg-red-200 shake' : ''}
                      `}
                    >
                      {currentAnswer || '?'}
                    </div>
                  </span>{' '}
                  {q.sentencePart2}
                </div>

                {/* Selection Buttons for this specific question */}
                {!isDone && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {WORD_BANK_D.map(word => {
                         if (usedWords.includes(word)) return null;
                         return (
                           <button
                             key={word}
                             onClick={() => handleSelectWord(q.id, word)}
                             className="text-lg px-3 py-1 bg-retro-blue/10 rounded-lg border border-retro-blue hover:bg-retro-blue hover:text-white transition-colors"
                           >
                             {word}
                           </button>
                         )
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionD;