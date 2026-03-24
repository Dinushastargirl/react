import React, { createContext, useContext, useState, useEffect } from 'react';

interface CourseContextType {
  completedDays: number[];
  toggleDayComplete: (dayId: number) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isELI12: boolean;
  toggleELI12: () => void;
  badges: string[];
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    const saved = localStorage.getItem('completedDays');
    return saved ? JSON.parse(saved) : [];
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  const [isELI12, setIsELI12] = useState(() => {
    const saved = localStorage.getItem('isELI12');
    return saved === 'true';
  });

  const [badges, setBadges] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem('completedDays', JSON.stringify(completedDays));
    
    // Calculate badges based on progress
    const newBadges = [];
    if (completedDays.length >= 1) newBadges.push('Beginner 🚀');
    if (completedDays.length >= 3) newBadges.push('Explorer 🧭');
    if (completedDays.length >= 5) newBadges.push('Builder 🏗️');
    if (completedDays.length >= 8) newBadges.push('Master 🎓');
    if (completedDays.length === 10) newBadges.push('Legend 🏆');
    setBadges(newBadges);
  }, [completedDays]);

  useEffect(() => {
    localStorage.setItem('darkMode', String(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('isELI12', String(isELI12));
  }, [isELI12]);

  const toggleDayComplete = (dayId: number) => {
    setCompletedDays(prev => 
      prev.includes(dayId) ? prev.filter(id => id !== dayId) : [...prev, dayId]
    );
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleELI12 = () => setIsELI12(!isELI12);

  return (
    <CourseContext.Provider value={{ 
      completedDays, 
      toggleDayComplete, 
      isDarkMode, 
      toggleDarkMode,
      isELI12,
      toggleELI12,
      badges
    }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) throw new Error('useCourse must be used within a CourseProvider');
  return context;
};
