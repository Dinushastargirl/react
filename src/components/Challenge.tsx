import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';
import { Challenge as ChallengeType } from '../types';

interface ChallengeProps {
  challenge: ChallengeType;
  index: number;
}

const Challenge: React.FC<ChallengeProps> = ({ challenge, index }) => {
  const [showHint, setShowHint] = React.useState(false);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-l-8 border-orange-500 shadow-md mb-4"
    >
      <div className="flex items-start">
        <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg mr-4 text-orange-600 font-bold">
          #{index + 1}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold mb-2 dark:text-white">{challenge.title}</h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{challenge.description}</p>
          
          <button 
            onClick={() => setShowHint(!showHint)}
            className="flex items-center text-sm font-bold text-orange-500 hover:text-orange-600 transition"
          >
            <Lightbulb className="w-4 h-4 mr-1" /> {showHint ? "Hide Hint" : "Show Hint"}
          </button>
          
          {showHint && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-sm text-orange-700 dark:text-orange-300 border border-orange-100 dark:border-orange-900/50 italic"
            >
              💡 {challenge.hint}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Challenge;
