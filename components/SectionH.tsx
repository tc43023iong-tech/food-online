
import React, { useState } from 'react';
import { QUESTIONS_H } from '../constants';
import { Check, AlertTriangle, PenTool } from 'lucide-react';

const SectionH: React.FC = () => {
  const [completedIds, setCompletedIds] = useState<number[]>([]);
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
  const [shakingWordIndex, setShakingWordIndex] = useState<string | null>(null);
  
  // Handling the correction modal/options
  const handleWordClick = (qId: number, segIndex: number, isMistake?: boolean) => {
    if (completedIds.includes(qId)) return;

    if (isMistake) {
      // Open selection for this question
      setActiveQuestionId(qId);
    } else {
      // Shake this word to indicate it's correct
      setShakingWordIndex(`${qId}-${segIndex}`);
      setTimeout(() => setShakingWordIndex(null), 500);
    }
  };

  const handleCorrection = (qId: number, selectedOption: string, correctOption: string) => {
    if (selectedOption === correctOption) {
      setCompletedIds([...completedIds, qId]);
      setActiveQuestionId(null);
    } else {
      // Shake the modal or provide negative feedback
      // For simplicity, we just close it or let them try again. 
      // Let's just do a small visual cue.
      setActiveQuestionId(null);
      alert("Try again!"); // Simple fallback or could add state for modal shake
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border-4 border-retro-dark rounded-3xl p-6 md:p-8 shadow-retro">
        <h2 className="text-4xl font-retro text-retro-dark mb-8 text-center leading-tight">
          <span className="bg-retro-accent text-white px-4 py-1 rounded-xl border-2 border-retro-dark transform -rotate-2 inline-block shadow-sm">
            Section H 🛠️
          </span>
          <br/>
          <span className="text-3xl mt-2 block">Find & Fix the Mistake!</span>
        </h2>
        
        <p className="text-center font-sans text-xl mb-8 text-gray-500 bg-retro-bg p-2 rounded-xl">
          Click the <b>wrong</b> word in each sentence!
        </p>

        <div className="space-y-6">
          {QUESTIONS_H.map((q) => {
            const isCompleted = completedIds.includes(q.id);
            const isEditing = activeQuestionId === q.id;

            // Find the mistake segment to get its options
            const mistakeSegment = q.segments.find(s => s.isMistake);

            return (
              <div key={q.id} className="relative">
                <div 
                  className={`
                    p-6 rounded-2xl border-2 border-retro-dark transition-all
                    ${isCompleted ? 'bg-retro-mint/40' : 'bg-white hover:shadow-md'}
                  `}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-retro text-2xl text-retro-accent mt-1">{q.id}.</span>
                    
                    <div className="flex flex-wrap gap-2 text-2xl md:text-3xl font-sans leading-relaxed">
                      {q.segments.map((seg, idx) => {
                        const isShaking = shakingWordIndex === `${q.id}-${idx}`;
                        // If completed, show corrected text for the mistake segment
                        const textToShow = (isCompleted && seg.isMistake && seg.correction) 
                          ? seg.correction 
                          : seg.text;

                        return (
                          <span
                            key={idx}
                            onClick={() => handleWordClick(q.id, idx, seg.isMistake)}
                            className={`
                              cursor-pointer rounded-lg px-2 border-2 border-transparent transition-all select-none
                              ${isCompleted && seg.isMistake ? 'text-green-600 font-bold bg-green-100 border-green-200' : ''}
                              ${!isCompleted && 'hover:bg-retro-yellow hover:border-retro-dark hover:-translate-y-1 active:translate-y-0'}
                              ${isShaking ? 'shake bg-red-100 text-red-500' : ''}
                            `}
                          >
                            {textToShow}
                          </span>
                        );
                      })}
                      
                      {isCompleted && <Check className="text-green-600 w-8 h-8 ml-2 inline-block animate-bounce" />}
                    </div>
                  </div>
                </div>

                {/* Correction Modal / Popover */}
                {isEditing && mistakeSegment && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-retro-dark/10 backdrop-blur-sm rounded-2xl">
                    <div className="bg-white p-6 rounded-2xl border-4 border-retro-dark shadow-retro animate-in fade-in zoom-in duration-200 max-w-sm w-full mx-4">
                      <div className="text-center mb-4">
                        <div className="inline-block p-3 bg-retro-pink rounded-full border-2 border-retro-dark mb-2">
                          <PenTool size={24} className="text-retro-dark" />
                        </div>
                        <h3 className="font-retro text-2xl">Fix the word: "{mistakeSegment.text}"</h3>
                      </div>
                      
                      <div className="grid gap-3">
                        {mistakeSegment.options?.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleCorrection(q.id, opt, mistakeSegment.correction!)}
                            className="p-3 text-xl font-bold bg-retro-bg border-2 border-retro-dark rounded-xl hover:bg-retro-mint hover:scale-105 transition-all"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      <button 
                        onClick={() => setActiveQuestionId(null)}
                        className="mt-4 text-gray-500 font-retro text-lg hover:text-retro-dark underline"
                      >
                        Cancel
                      </button>
                    </div>
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

export default SectionH;
