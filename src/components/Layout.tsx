import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, Moon, Sun, Github, Menu, X, Baby } from 'lucide-react';
import { useCourse } from '../context/CourseContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDarkMode, toggleDarkMode, completedDays, isELI12, toggleELI12, badges } = useCourse();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const progress = (completedDays.length / 10) * 100;

  return (
    <div className="min-h-screen bg-orange-50/30 dark:bg-gray-900 transition-colors duration-300 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-orange-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-orange-500 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                <Rocket className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-black text-gray-900 dark:text-white tracking-tighter">
                REACT<span className="text-orange-500">CRASH</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className={`text-sm font-bold ${location.pathname === '/' ? 'text-orange-500' : 'text-gray-600 dark:text-gray-300 hover:text-orange-500'}`}>Home</Link>
              
              {/* Badges */}
              <div className="flex items-center space-x-1">
                {badges.map((badge, i) => (
                  <motion.span 
                    key={badge}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-[10px] font-black text-orange-600 dark:text-orange-400 rounded-full border border-orange-200 dark:border-orange-800"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>

              <div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
              
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-orange-500"
                  />
                </div>
                <span className="text-xs font-bold text-gray-500">{Math.round(progress)}%</span>
              </div>

              <div className="flex items-center space-x-2">
                <button 
                  onClick={toggleELI12}
                  className={`p-2 rounded-full transition-all duration-300 flex items-center space-x-1 ${isELI12 ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30'}`}
                  title={isELI12 ? "Switch to Pro Mode" : "Switch to ELI12 Mode"}
                >
                  <Baby className="w-5 h-5" />
                  <span className="text-[10px] font-black uppercase px-1">{isELI12 ? "ELI12" : "PRO"}</span>
                </button>

                <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={toggleELI12}
                className={`p-1.5 rounded-full flex items-center space-x-1 text-[10px] font-black ${isELI12 ? 'bg-orange-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
              >
                <Baby className="w-4 h-4" />
                <span>{isELI12 ? "ELI12" : "PRO"}</span>
              </button>
              <button onClick={toggleDarkMode} className="p-2 text-gray-600 dark:text-gray-300">
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600 dark:text-gray-300">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-800 border-b border-orange-100 dark:border-gray-700 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-bold text-gray-900 dark:text-white"
                >
                  Home
                </Link>
                
                {badges.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {badges.map(badge => (
                      <span key={badge} className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-[10px] font-black text-orange-600 dark:text-orange-400 rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-2">Your Progress</p>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500" style={{ width: `${progress}%` }} />
                    </div>
                    <span className="text-sm font-bold text-orange-500">{Math.round(progress)}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-orange-100 dark:border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition"><Github className="w-6 h-6" /></a>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Made with 🧡 for future React Masters.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
            © 2026 React Crash Course. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
