import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Code, 
  Trophy, 
  HelpCircle, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Sparkles
} from 'lucide-react';
import { courseData } from '../data/courseData';
import { useCourse } from '../context/CourseContext';
import CodePlayground from '../components/CodePlayground';
import Challenge from '../components/Challenge';
import Quiz from '../components/Quiz';

const VisualDiagram: React.FC<{ dayId: number }> = ({ dayId }) => {
  if (dayId === 1) {
    return (
      <div className="p-8 bg-white dark:bg-gray-800 rounded-3xl border border-orange-100 dark:border-gray-700 shadow-inner flex flex-col items-center space-y-4">
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">React Architecture</h4>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-48 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">App Component</div>
          <div className="w-1 h-8 bg-orange-300"></div>
          <div className="flex space-x-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-32 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-md">Header</div>
              <div className="w-1 h-4 bg-orange-200"></div>
              <div className="w-24 h-8 bg-orange-300 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm">Logo</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-32 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-md">Main Content</div>
              <div className="w-1 h-4 bg-orange-200"></div>
              <div className="w-24 h-8 bg-orange-300 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm">Post</div>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 italic">Components nested inside components - like a tree! 🌳</p>
      </div>
    );
  }
  if (dayId === 2) {
    return (
      <div className="p-8 bg-white dark:bg-gray-800 rounded-3xl border border-orange-100 dark:border-gray-700 shadow-inner flex flex-col items-center space-y-6">
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Lists & Keys</h4>
        <div className="flex items-center space-x-4">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="text-[10px] font-bold text-blue-600 mb-2 uppercase">Array Data</div>
            <div className="space-y-1">
              <div className="w-16 h-2 bg-blue-400 rounded"></div>
              <div className="w-12 h-2 bg-blue-400 rounded"></div>
              <div className="w-14 h-2 bg-blue-400 rounded"></div>
            </div>
          </div>
          <ArrowRight className="text-gray-300" />
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center text-[8px] text-white font-bold">1</div>
              <div className="w-24 h-6 bg-orange-100 dark:bg-orange-900/20 rounded border border-orange-200 dark:border-orange-800"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center text-[8px] text-white font-bold">2</div>
              <div className="w-24 h-6 bg-orange-100 dark:bg-orange-900/20 rounded border border-orange-200 dark:border-orange-800"></div>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 italic">Keys help React track which items changed! 🔑</p>
      </div>
    );
  }
  if (dayId === 3) {
    return (
      <div className="p-8 bg-white dark:bg-gray-800 rounded-3xl border border-orange-100 dark:border-gray-700 shadow-inner flex flex-col items-center space-y-6">
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Props Flow</h4>
        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-orange-500 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">Parent</div>
            <div className="mt-2 text-xs font-bold text-orange-600">State</div>
          </div>
          <div className="flex flex-col items-center">
            <ArrowRight className="text-orange-400 w-8 h-8 animate-pulse" />
            <span className="text-[10px] font-bold text-gray-400 uppercase">Props</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-orange-300 rounded-2xl flex items-center justify-center text-white font-bold shadow-md">Child</div>
            <div className="mt-2 text-xs font-bold text-orange-400">Read-only</div>
          </div>
        </div>
        <p className="text-xs text-gray-400 italic">Data flows down from Parent to Child! 🎁</p>
      </div>
    );
  }
  if (dayId === 4) {
    return (
      <div className="p-8 bg-white dark:bg-gray-800 rounded-3xl border border-orange-100 dark:border-gray-700 shadow-inner flex flex-col items-center space-y-6">
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Context API</h4>
        <div className="relative w-full max-w-xs h-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/10 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow"></div>
          <div className="z-10 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-black shadow-xl">STORE</div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-400 rounded-lg shadow transform -rotate-12"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-green-400 rounded-lg shadow transform rotate-45"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-pink-400 rounded-lg shadow transform -rotate-12"></div>
        </div>
        <p className="text-xs text-gray-400 italic">Global state accessible from anywhere! 🌍</p>
      </div>
    );
  }
  if (dayId === 5) {
    return (
      <div className="p-8 bg-white dark:bg-gray-800 rounded-3xl border border-orange-100 dark:border-gray-700 shadow-inner flex flex-col items-center space-y-6">
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Custom Hooks</h4>
        <div className="flex items-center space-y-4 flex-col">
          <div className="px-6 py-3 bg-pink-500 rounded-2xl text-white font-bold shadow-lg flex items-center">
            <Code className="mr-2 w-4 h-4" /> useMyHook()
          </div>
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 font-bold">1</div>
              <span className="text-[10px] mt-1 text-gray-400">Logic</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 font-bold">2</div>
              <span className="text-[10px] mt-1 text-gray-400">State</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 font-bold">3</div>
              <span className="text-[10px] mt-1 text-gray-400">Effects</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 italic">Extract and reuse logic across components! 🎣</p>
      </div>
    );
  }
  if (dayId === 6) {
    return (
      <div className="p-8 bg-white dark:bg-gray-800 rounded-3xl border border-orange-100 dark:border-gray-700 shadow-inner flex flex-col items-center space-y-6">
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Routing</h4>
        <div className="w-full max-w-xs space-y-4">
          <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-between border border-gray-200 dark:border-gray-600">
            <span className="text-xs font-mono text-blue-500">/home</span>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="w-16 h-6 bg-blue-400 rounded shadow-sm"></div>
          </div>
          <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-between border border-gray-200 dark:border-gray-600">
            <span className="text-xs font-mono text-green-500">/about</span>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="w-16 h-6 bg-green-400 rounded shadow-sm"></div>
          </div>
        </div>
        <p className="text-xs text-gray-400 italic">URLs map to different components! 🗺️</p>
      </div>
    );
  }
  if (dayId === 9) {
    return (
      <div className="p-8 bg-white dark:bg-gray-800 rounded-3xl border border-orange-100 dark:border-gray-700 shadow-inner flex flex-col items-center space-y-6">
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Game State</h4>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg ${i === 4 ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'}`}>
              {i === 4 ? 'X' : ''}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
          <span className="text-xs font-bold text-orange-600 uppercase tracking-tighter">Next Turn: O</span>
        </div>
        <p className="text-xs text-gray-400 italic">State drives the entire game logic! 🎮</p>
      </div>
    );
  }
  return null;
};

const DayDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { completedDays, toggleDayComplete, isELI12 } = useCourse();
  
  const dayId = parseInt(id || '1');
  const day = courseData.find(d => d.id === dayId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dayId]);

  if (!day) return <div className="text-center py-20 text-2xl font-bold">Day not found! 🕵️‍♂️</div>;

  const isCompleted = completedDays.includes(day.id);
  const nextDayId = dayId < 10 ? dayId + 1 : null;
  const prevDayId = dayId > 1 ? dayId - 1 : null;

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      {/* Navigation Header */}
      <div className="flex items-center justify-between mb-8">
        <Link 
          to="/" 
          className="flex items-center text-gray-500 hover:text-orange-500 font-bold transition group"
        >
          <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Roadmap
        </Link>
        
        <div className="flex items-center space-x-2">
          {prevDayId && (
            <Link to={`/day/${prevDayId}`} className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-orange-50 dark:hover:bg-gray-700 transition">
              <ChevronLeft className="w-6 h-6 text-orange-500" />
            </Link>
          )}
          <div className={`px-4 py-1 bg-${day.colorScheme}-100 dark:bg-${day.colorScheme}-900/30 text-${day.colorScheme}-600 dark:text-${day.colorScheme}-400 rounded-full text-sm font-black`}>
            DAY {day.id} / 10
          </div>
          {nextDayId && (
            <Link to={`/day/${nextDayId}`} className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-orange-50 dark:hover:bg-gray-700 transition">
              <ChevronRight className="w-6 h-6 text-orange-500" />
            </Link>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="space-y-4">
        <div className="flex items-center space-x-4">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-6xl"
          >
            {day.emoji}
          </motion.div>
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter">
              {day.title}
            </h1>
            <p className={`text-xl font-bold text-${day.colorScheme}-500`}>{day.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className={`bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-xl border-4 border-sand-${day.colorScheme} dark:border-gray-700 relative overflow-hidden`}>
        {isELI12 && (
          <div className={`absolute top-4 right-4 px-3 py-1 bg-${day.colorScheme}-500 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg animate-bounce`}>
            ELI12 Mode Active 👶
          </div>
        )}
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-xl mr-4">
            <BookOpen className="text-blue-600 w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black dark:text-white">{isELI12 ? "The Simple Story" : "The Deep Dive"}</h2>
        </div>
        <div className="prose prose-orange dark:prose-invert max-w-none">
          <AnimatePresence mode="wait">
            <motion.div 
              key={isELI12 ? 'eli12' : 'standard'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
            >
              {isELI12 ? day.eli12Explanation : day.explanation}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8">
          <VisualDiagram dayId={day.id} />
        </div>
      </section>

      {/* Tips Section */}
      {day.tips && day.tips.length > 0 && (
        <section className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-[2rem] border border-yellow-100 dark:border-yellow-800">
          <h3 className="text-xl font-black text-yellow-700 dark:text-yellow-400 mb-4 flex items-center">
            <Sparkles className="mr-2 w-5 h-5" /> Pro Tips & Best Practices
          </h3>
          <ul className="space-y-3">
            {day.tips.map((tip, i) => (
              <li key={i} className="flex items-start space-x-3 text-yellow-800 dark:text-yellow-300">
                <div className="mt-1.5 w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
                <span className="text-sm font-medium">{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Code Section */}
      <section>
        <div className="flex items-center mb-6">
          <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-xl mr-4">
            <Code className="text-purple-600 w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black dark:text-white">Code Playground</h2>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Try editing the code below to see how it changes in real-time!</p>
        <CodePlayground code={day.codeExample} />
      </section>

      {/* Mini Project Section */}
      {day.miniProject && (
        <section className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-[2rem] border border-indigo-100 dark:border-indigo-800">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-xl mr-4">
              <Rocket className="text-indigo-600 w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black dark:text-white">Mini Project: {day.miniProject.title}</h2>
          </div>
          <p className="text-indigo-800 dark:text-indigo-300 mb-6 font-medium">{day.miniProject.description}</p>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-inner border border-indigo-100 dark:border-indigo-900">
            <CodePlayground code={day.miniProject.code} />
          </div>
        </section>
      )}

      {/* Challenges Section */}
      <section>
        <div className="flex items-center mb-6">
          <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-xl mr-4">
            <Trophy className="text-green-600 w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black dark:text-white">Mini Challenges</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {day.challenges.map((challenge, idx) => (
            <Challenge key={idx} challenge={challenge} index={idx} />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <section>
        <div className="flex items-center mb-6">
          <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-xl mr-4">
            <HelpCircle className="text-orange-600 w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black dark:text-white">Knowledge Check</h2>
        </div>
        <Quiz questions={day.quizzes} />
      </section>

      {/* Completion Section */}
      <section className="pt-12 border-t border-gray-200 dark:border-gray-700">
        <div className={`p-10 rounded-[2.5rem] text-center transition-all duration-500 ${
          isCompleted 
            ? `bg-${day.colorScheme}-500 text-white shadow-${day.colorScheme}-200/50 shadow-2xl` 
            : 'bg-white dark:bg-gray-800 border-4 border-dashed border-gray-200 dark:border-gray-700'
        }`}>
          {isCompleted ? (
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
              <CheckCircle2 className="w-20 h-20 mx-auto mb-4" />
              <h2 className="text-3xl font-black mb-2">Day {day.id} Mastered!</h2>
              <p className={`text-${day.colorScheme}-100 mb-8`}>You're doing amazing. Keep up the momentum!</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => toggleDayComplete(day.id)}
                  className="px-8 py-4 bg-white/20 hover:bg-white/30 rounded-2xl font-bold transition"
                >
                  Mark as Incomplete
                </button>
                {nextDayId && (
                  <button 
                    onClick={() => navigate(`/day/${nextDayId}`)}
                    className={`px-8 py-4 bg-white text-${day.colorScheme}-600 rounded-2xl font-bold shadow-xl hover:scale-105 transition`}
                  >
                    Next Lesson: Day {nextDayId}
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            <div>
              <h2 className="text-3xl font-black mb-2 dark:text-white">Finished the lesson?</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">Mark this day as complete to track your progress.</p>
              <button 
                onClick={() => toggleDayComplete(day.id)}
                className={`px-12 py-5 bg-${day.colorScheme}-500 text-white rounded-2xl font-black text-xl shadow-xl hover:bg-${day.colorScheme}-600 hover:scale-105 transition active:scale-95`}
              >
                Complete Day {day.id} 🚀
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DayDetail;
