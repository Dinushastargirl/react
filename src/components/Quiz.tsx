import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);
    const correct = option === questions[currentIdx].answer;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 bg-orange-50 dark:bg-gray-800 rounded-2xl text-center border-2 border-orange-200 dark:border-orange-900"
      >
        <h3 className="text-3xl font-bold text-orange-600 mb-4">Quiz Complete! 🎉</h3>
        <p className="text-xl mb-6">Your Score: <span className="font-bold text-orange-500">{score} / {questions.length}</span></p>
        <button 
          onClick={resetQuiz}
          className="flex items-center justify-center mx-auto px-6 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition shadow-lg"
        >
          <RotateCcw className="mr-2 w-5 h-5" /> Try Again
        </button>
      </motion.div>
    );
  }

  const q = questions[currentIdx];

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-orange-100 dark:border-orange-900 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Question {currentIdx + 1} of {questions.length}</span>
        <div className="h-2 w-32 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-orange-500 transition-all duration-300" 
            style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-xl font-bold mb-6 dark:text-white">{q.question}</h3>

      <div className="space-y-3">
        {q.options.map((option, idx) => {
          const isSelected = selectedOption === option;
          const isCorrectOption = option === q.answer;
          
          let bgColor = "bg-gray-50 dark:bg-gray-700 hover:bg-orange-50 dark:hover:bg-gray-600";
          let borderColor = "border-transparent";
          
          if (selectedOption) {
            if (isCorrectOption) {
              bgColor = "bg-green-100 dark:bg-green-900/30";
              borderColor = "border-green-500";
            } else if (isSelected) {
              bgColor = "bg-red-100 dark:bg-red-900/30";
              borderColor = "border-red-500";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleOptionSelect(option)}
              disabled={!!selectedOption}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 flex items-center justify-between ${bgColor} ${borderColor}`}
            >
              <span className="font-medium dark:text-gray-200">{option}</span>
              {selectedOption && isCorrectOption && <CheckCircle2 className="text-green-500 w-5 h-5" />}
              {selectedOption && isSelected && !isCorrectOption && <XCircle className="text-red-500 w-5 h-5" />}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedOption && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-900/50"
          >
            <p className="text-sm text-orange-800 dark:text-orange-200 italic">
              <span className="font-bold">Explanation:</span> {q.explanation}
            </p>
            <button 
              onClick={nextQuestion}
              className="mt-4 w-full flex items-center justify-center py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition"
            >
              {currentIdx === questions.length - 1 ? "Finish Quiz" : "Next Question"} <ChevronRight className="ml-1 w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
