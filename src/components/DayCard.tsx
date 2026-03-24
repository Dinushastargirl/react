import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { DayTopic } from '../types';
import { useCourse } from '../context/CourseContext';

interface DayCardProps {
  day: DayTopic;
}

const DayCard: React.FC<DayCardProps> = ({ day }) => {
  const { completedDays } = useCourse();
  const isCompleted = completedDays.includes(day.id);

  return (
    <Link to={`/day/${day.id}`}>
      <motion.div 
        whileHover={{ scale: 1.03, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className={`relative h-full p-6 rounded-3xl border-2 transition-all duration-300 flex flex-col card-${day.colorScheme} ${
          isCompleted 
            ? 'opacity-80' 
            : 'shadow-lg'
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="text-4xl">{day.emoji}</div>
          {isCompleted && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-green-500 text-white p-1 rounded-full"
            >
              <CheckCircle2 className="w-5 h-5" />
            </motion.div>
          )}
        </div>
        
        <div className="mb-2">
          <span className={`text-xs font-black uppercase tracking-tighter text-${day.colorScheme}-500`}>Day {day.id}</span>
          <h3 className="text-xl font-bold dark:text-white leading-tight">{day.title}</h3>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow">
          {day.subtitle}
        </p>
        
        <div className={`flex items-center font-bold text-sm group text-${day.colorScheme}-600`}>
          Start Learning <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </motion.div>
    </Link>
  );
};

export default DayCard;
