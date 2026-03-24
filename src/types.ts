export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface Challenge {
  title: string;
  description: string;
  hint: string;
}

export interface MiniProject {
  title: string;
  description: string;
  code: string;
}

export interface DayTopic {
  id: number;
  title: string;
  subtitle: string;
  explanation: string;
  eli12Explanation: string;
  codeExample: string;
  challenges: Challenge[];
  quizzes: QuizQuestion[];
  miniProject?: MiniProject;
  tips: string[];
  emoji: string;
  colorScheme: string; // e.g., 'blue', 'green', 'yellow', 'pink', 'orange', 'purple'
}
