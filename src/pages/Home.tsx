import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import { courseData } from '../data/courseData';
import DayCard from '../components/DayCard';
import { useCourse } from '../context/CourseContext';

const Home: React.FC = () => {
  const { completedDays } = useCourse();
  const progress = (completedDays.length / 10) * 100;

  return (
    <div className="space-y-16 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[10%] w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-[20%] w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-bold uppercase tracking-widest"
        >
          <Sparkles className="w-4 h-4" />
          <span>The Ultimate Revision Guide</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none"
        >
          Welcome to React <br />
          <span className="text-orange-500">Crash Course 🚀</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Master React again in just 10 days. We've broken down complex concepts into bite-sized, fun, and interactive lessons.
        </motion.p>

        {/* Progress Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl border border-orange-100 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
        >
          <div className="flex items-center space-x-6">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-100 dark:text-gray-700"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }}
                  animate={{ strokeDashoffset: 251.2 - (251.2 * progress) / 100 }}
                  className="text-orange-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-black text-orange-600">
                {Math.round(progress)}%
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold dark:text-white">Your Mastery</h3>
              <p className="text-gray-500">{completedDays.length} of 10 days completed</p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-2xl text-center min-w-[100px]">
              <div className="text-2xl font-black text-orange-600">{10 - completedDays.length}</div>
              <div className="text-xs font-bold text-gray-500 uppercase">Remaining</div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl text-center min-w-[100px]">
              <div className="text-2xl font-black text-green-600">{completedDays.length}</div>
              <div className="text-xs font-bold text-gray-500 uppercase">Mastered</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center">
            <BookOpen className="mr-3 text-orange-500" /> The 10-Day Roadmap
          </h2>
          <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Scroll to explore</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {courseData.map((day, idx) => (
            <motion.div
              key={day.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <DayCard day={day} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Motivation Section */}
      <section className="bg-orange-500 rounded-[3rem] p-12 text-white text-center space-y-8 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        
        <div className="relative z-10 space-y-4">
          <h2 className="text-4xl font-black tracking-tight">Ready to become a Pro?</h2>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">
            React is the most in-demand skill in web development. Master it once, and you can build anything.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold">Interactive Quizzes</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold">Live Code Editor</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold">Mini Challenges</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
