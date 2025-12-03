import React, { useState } from 'react';
import { QUESTIONS_C } from '../constants';
import RetroButton from './RetroButton';
import { Check, RotateCcw } from 'lucide-react';

const SectionC: React.FC = () => {
  const [userSequences, setUserSequences] = useState<{ [key: number]: string[] }>({});
  const [completed, setCompleted] = useState<number[]>([]);
  const [errors, setErrors] = useState<number[]>([]);

  const handleWordClick = (qId: number, word: string) => {
    if (completed.includes(qId)) return;
    
    setUserSequences(prev => {
      const current = prev[qId] || [];
      return { ...prev, [qId]: [...current, word] };
    });
  };

  const handleRemoveWord = (qId: number, index: number) => {
    if (completed.includes(qId)) return;
    setUserSequences(prev => {
      const current = [...(prev[qId] || [])];
      current.splice(index, 1);
      return { ...prev, [qId]: current };
    });
  };

  const checkAnswer = (qId: number, correctSeq: string[]) => {
    const userSeq = userSequences[qId] || [];
    const userString = userSeq.join(' ');
    const correctString = correctSeq.join(' ');

    if (userString === correctString) {
      setCompleted([...completed, qId]);
      setErrors(errors.filter(e => e !== qId));
    } else {
      setErrors([...errors, qId]);
      setTimeout(() => setErrors(prev => prev.filter(e => e !== qId)), 500);
      setUserSequences(prev => ({ ...prev, [qId]: [] })); // Auto clear on wrong for quick retry
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border-4 border-retro-dark rounded-3xl p-6 md:p-8 shadow-retro">
        <h2 className="text-4xl font-retro text-retro-dark mb-8 text-center leading-tight">
          <span className="bg-retro-mint px-4 py-1 rounded-xl border-2 border-retro-dark transform -rotate-1 inline-block shadow-sm">
            Section C ✏️
          </span>
          <br/>
          <span className="text-3xl mt-2 block">Click words to answer!</span>
        </h2>

        <div className="space-y-10">
          {QUESTIONS_C.map((q) => {
            const isDone = completed.includes(q.id);
            const userSeq = userSequences[q.id] || [];
            
            return (
              <div key={q.id} className="bg-retro-bg p-6 rounded-3xl border-2 border-retro-dark shadow-sm">
                <div className="mb-4 font-retro text-3xl text-retro-dark flex items-start gap-2">
                  <span className="text-retro-accent">Q:</span>
                  {q.question}
                </div>

                {/* Answer Area */}
                <div className={`min-h-[80px] bg-white border-2 border-retro-dark border-dashed rounded-2xl mb-6 flex flex-wrap items-center p-3 gap-3 transition-colors ${isDone ? 'bg-retro-mint/30 border-solid' : ''}`}>
                  {isDone ? (
                    // Completed State
                    <div className="flex items-center gap-3 text-2xl font-sans font-bold text-retro-dark w-full justify-center">
                      <Check className="text-green-600 w-8 h-8" />
                      {q.correctSequence.join(' ')}
                    </div>
                  ) : (
                    // Active Building State
                    userSeq.map((word, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleRemoveWord(q.id, idx)}
                        className="bg-retro-yellow px-4 py-2 rounded-xl border-2 border-retro-dark font-sans text-xl hover:bg-red-200 transition-colors animate-fade-in"
                      >
                        {word}
                      </button>
                    ))
                  )}
                  {!isDone && userSeq.length === 0 && (
                    <span className="text-gray-400 font-sans italic text-xl mx-auto">Click words below...</span>
                  )}
                </div>

                {/* Word Pool */}
                {!isDone && (
                  <div className="flex flex-wrap gap-3 justify-center mb-4">
                    {q.wordPool.map((word, idx) => {
                      const usedCount = userSeq.filter(w => w === word).length;
                      const poolCount = q.wordPool.filter(w => w === word).length;
                      const isExhausted = usedCount >= poolCount;

                      return (
                        <button
                          key={idx}
                          disabled={isExhausted}
                          onClick={() => handleWordClick(q.id, word)}
                          className={`
                            px-5 py-3 rounded-xl border-b-4 border-retro-dark font-sans font-bold text-xl transition-all active:translate-y-1 active:border-b-0
                            ${isExhausted ? 'opacity-30 bg-gray-200 border-gray-400' : 'bg-white hover:bg-retro-blue hover:text-white'}
                          `}
                        >
                          {word}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Actions */}
                {!isDone && (
                  <div className="flex justify-end gap-3">
                    <button 
                       onClick={() => setUserSequences(prev => ({ ...prev, [q.id]: [] }))}
                       className="p-3 text-gray-500 hover:text-retro-dark hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <RotateCcw size={24} />
                    </button>
                    <RetroButton 
                      size="md" 
                      onClick={() => checkAnswer(q.id, q.correctSequence)}
                      className={errors.includes(q.id) ? 'shake bg-red-400' : ''}
                      disabled={userSeq.length === 0}
                    >
                      Check
                    </RetroButton>
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

export default SectionC;