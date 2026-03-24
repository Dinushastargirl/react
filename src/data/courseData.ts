import { DayTopic } from '../types';

export const courseData: DayTopic[] = [
  {
    id: 1,
    title: "Complete React Basics",
    subtitle: "JSX, Components, Props, State & Events",
    emoji: "🚀",
    colorScheme: "blue",
    explanation: `React is a JavaScript library for building user interfaces. It's all about **Components**.
    - **JSX**: A syntax extension that looks like HTML but works in JS.
    - **Props**: Data passed from parent to child (read-only).
    - **State**: Data managed within a component (can change).
    - **Events**: Interactions like clicks that trigger functions.`,
    eli12Explanation: `Imagine React is a giant box of Legos. 
    - **Components** are the individual bricks you build.
    - **JSX** is the instruction manual that tells you where to put the bricks.
    - **Props** are like a friend handing you a specific brick to use.
    - **State** is like a brick that can change color when you touch it!
    - **Events** are you actually touching the brick to make it change.`,
    codeExample: `function WelcomeCard({ name }) {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-blue-100">
      <h2 className="text-2xl font-bold text-blue-600">Hello, {name}! 👋</h2>
      <p className="mt-2 text-gray-600">You've clicked the button {count} times.</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition"
      >
        Click Me!
      </button>
    </div>
  );
}

render(<WelcomeCard name="Future Master" />);`,
    challenges: [
      { title: "Change the Name", description: "Pass a different name prop to the WelcomeCard.", hint: "Change 'Future Master' in the render call." },
      { title: "Add a Reset", description: "Add a button to reset the count to zero.", hint: "Use setCount(0)." }
    ],
    quizzes: [
      { question: "What is JSX?", options: ["A CSS framework", "JavaScript XML", "A database", "A type of coffee"], answer: "JavaScript XML", explanation: "JSX allows us to write HTML-like code inside JavaScript." }
    ],
    miniProject: {
      title: "The Ultimate Counter",
      description: "Build a counter that can increment, decrement, and reset.",
      code: `function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold mb-4">{count}</h1>
      <div className="flex gap-2 justify-center">
        <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-red-400 text-white rounded">-</button>
        <button onClick={() => setCount(0)} className="px-4 py-2 bg-gray-400 text-white rounded">Reset</button>
        <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-green-400 text-white rounded">+</button>
      </div>
    </div>
  );
}
render(<Counter />);`
    },
    tips: ["Always start component names with a Capital letter.", "Use camelCase for event handlers like onClick."],
  },
  {
    id: 2,
    title: "Advanced Basics",
    subtitle: "Lists, Keys, Conditional Rendering & Forms",
    emoji: "📋",
    colorScheme: "green",
    explanation: `Now we handle multiple items and user input.
    - **Lists**: Use \`.map()\` to render arrays of data.
    - **Keys**: Unique IDs for list items to help React track changes.
    - **Conditional Rendering**: Using \`if\`, ternary operators, or \`&&\` to show/hide UI.
    - **Forms**: Controlled components where React state manages input values.`,
    eli12Explanation: `- **Lists** are like a shopping list where every item has its own spot.
    - **Keys** are like name tags on your cubby at school so you don't lose your stuff.
    - **Conditional Rendering** is like a 'Stop' and 'Go' sign. If the light is green, you go!
    - **Forms** are like writing a letter. You write it, and React holds onto the paper for you.`,
    codeExample: `function TodoApp() {
  const [items, setItems] = React.useState(["Learn React", "Build an App"]);
  const [input, setInput] = React.useState("");

  const addItem = () => {
    if (input) {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded flex-1"
          placeholder="New task..."
        />
        <button onClick={addItem} className="bg-green-500 text-white px-4 rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="p-2 bg-green-50 rounded border border-green-100">{item}</li>
        ))}
      </ul>
    </div>
  );
}
render(<TodoApp />);`,
    challenges: [
      { title: "Empty Check", description: "Don't allow adding empty tasks.", hint: "Check if input is empty in addItem." }
    ],
    quizzes: [
      { question: "Why do we need keys in lists?", options: ["For styling", "To help React identify items", "To sort them", "They aren't needed"], answer: "To help React identify items", explanation: "Keys help React track which items changed, were added, or were removed." }
    ],
    miniProject: {
      title: "Simple Quiz App",
      description: "Create a one-question quiz that shows 'Correct!' or 'Try again!'.",
      code: `function MiniQuiz() {
  const [answer, setAnswer] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const isCorrect = answer.toLowerCase() === "blue";

  return (
    <div className="p-4 bg-white rounded shadow">
      <p className="font-bold mb-2">What color is the sky?</p>
      <input 
        onChange={(e) => {setAnswer(e.target.value); setSubmitted(false)}} 
        className="border p-2 w-full mb-2"
      />
      <button onClick={() => setSubmitted(true)} className="bg-blue-500 text-white p-2 w-full">Submit</button>
      {submitted && (
        <p className={isCorrect ? "text-green-500" : "text-red-500"}>
          {isCorrect ? "Correct! 🎉" : "Try again! ❌"}
        </p>
      )}
    </div>
  );
}
render(<MiniQuiz />);`
    },
    tips: ["Always use unique IDs for keys, not just array indexes if possible.", "Prevent default form submission with e.preventDefault()."],
  },
  {
    id: 3,
    title: "useEffect & Lifecycle",
    subtitle: "Handling Side Effects & APIs",
    emoji: "⏳",
    colorScheme: "yellow",
    explanation: `\`useEffect\` lets you perform side effects in functional components.
    - **Mounting**: Runs once when component appears.
    - **Updating**: Runs when dependencies change.
    - **Unmounting**: Cleanup function runs when component disappears.`,
    eli12Explanation: `Think of \`useEffect\` as a robot that waits for something to happen. 
    - "When the lights turn on, fetch the mail."
    - "When the mail arrives, put it on the table."
    - "When I leave the room, turn off the lights."`,
    codeExample: `function DataFetcher() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">{data.title}</div>;
}
render(<DataFetcher />);`,
    challenges: [
      { title: "Change ID", description: "Fetch todo with ID 2 instead of 1.", hint: "Change the URL in the fetch call." }
    ],
    quizzes: [
      { question: "What does an empty dependency array [] do?", options: ["Runs every render", "Runs only once on mount", "Never runs", "Runs on unmount"], answer: "Runs only once on mount", explanation: "It tells React the effect doesn't depend on any values from props or state." }
    ],
    miniProject: {
      title: "Weather App (Mock)",
      description: "Build a component that 'fetches' weather data when a button is clicked.",
      code: `function Weather() {
  const [city, setCity] = React.useState("London");
  const [temp, setTemp] = React.useState(null);

  const fetchWeather = () => {
    setTemp("Loading...");
    setTimeout(() => setTemp(Math.floor(Math.random() * 30) + "°C"), 1000);
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold">{city}</h2>
      <p className="text-3xl my-4">{temp || "--"}</p>
      <button onClick={fetchWeather} className="bg-yellow-500 px-4 py-2 rounded">Get Weather</button>
    </div>
  );
}
render(<Weather />);`
    },
    tips: ["Always include all variables used inside the effect in the dependency array.", "Use cleanup functions to avoid memory leaks."],
  },
  {
    id: 4,
    title: "Context API",
    subtitle: "Global State & Theme Switching",
    emoji: "🌐",
    colorScheme: "purple",
    explanation: `Context provides a way to pass data through the component tree without having to pass props down manually at every level (Prop Drilling).`,
    eli12Explanation: `Imagine a radio station. Instead of walking to every house to tell a secret, you broadcast it! Anyone with a radio can listen.`,
    codeExample: `const ThemeContext = React.createContext();

function ThemeButton() {
  const { theme, toggle } = React.useContext(ThemeContext);
  return (
    <button 
      onClick={toggle}
      className={theme === 'light' ? 'bg-gray-800 text-white p-2' : 'bg-white text-gray-800 p-2'}
    >
      Toggle to {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}

function App() {
  const [theme, setTheme] = React.useState('light');
  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className={theme === 'light' ? 'bg-white p-10' : 'bg-gray-900 p-10'}>
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
  );
}
render(<App />);`,
    challenges: [
      { title: "Add User Context", description: "Create a UserContext to store a username and display it in a component.", hint: "Use React.createContext and Provider." },
      { title: "Multiple Contexts", description: "Try nesting two different providers (Theme and User).", hint: "Wrap one Provider inside another." }
    ],
    quizzes: [
      { question: "What problem does Context API solve?", options: ["Slow performance", "Prop Drilling", "Syntax errors", "Database connection"], answer: "Prop Drilling", explanation: "Context allows passing data deep into the component tree without manual props passing at every level." },
      { question: "Can you have multiple Contexts in one app?", options: ["Yes", "No", "Only 2", "Only 10"], answer: "Yes", explanation: "You can create as many contexts as your application needs." }
    ],
    tips: ["Use Context for truly global data like user auth or themes.", "Don't over-use Context; props are often simpler for 2-3 levels."],
  },
  {
    id: 5,
    title: "Custom Hooks",
    subtitle: "Building Reusable Logic",
    emoji: "🎣",
    colorScheme: "pink",
    explanation: `Custom hooks are functions that start with 'use' and can call other hooks. They allow you to extract component logic into reusable functions.`,
    eli12Explanation: `It's like building your own special tool. Instead of building a hammer every time you need one, you build it once and keep it in your toolbox!`,
    codeExample: `function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

function WidthDisplay() {
  const width = useWindowWidth();
  return <p className="p-4 bg-pink-50 rounded">Window width: {width}px</p>;
}
render(<WidthDisplay />);`,
    challenges: [
      { title: "useLocalStorage", description: "Create a hook that syncs a state value with localStorage.", hint: "Use useEffect to listen for changes and update localStorage." },
      { title: "useFetch", description: "Create a reusable hook to fetch data from any URL.", hint: "Return { data, loading, error } from the hook." }
    ],
    quizzes: [
      { question: "What must a custom hook name start with?", options: ["get", "use", "handle", "hook"], answer: "use", explanation: "React requires custom hooks to start with 'use' to enforce hook rules." },
      { question: "Can custom hooks use other hooks?", options: ["Yes", "No", "Only useState", "Only useEffect"], answer: "Yes", explanation: "Custom hooks are just functions that can compose other built-in or custom hooks." }
    ],
    tips: ["Always start custom hook names with 'use'.", "Custom hooks can return anything: values, functions, or objects."],
  },
  {
    id: 6,
    title: "Routing",
    subtitle: "Multi-page Apps with React Router",
    emoji: "🗺️",
    colorScheme: "blue",
    explanation: `React Router allows you to handle navigation in a Single Page Application (SPA) without reloading the page.`,
    eli12Explanation: `It's like a magic door. You step through and you're in a new room, but you never actually left the house!`,
    codeExample: `// This is a simplified simulation of routing
function RouterSim() {
  const [page, setPage] = React.useState("home");
  
  return (
    <div className="border rounded overflow-hidden">
      <nav className="bg-blue-500 p-2 text-white flex gap-4">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
      </nav>
      <div className="p-10">
        {page === "home" ? <h1>Home Page</h1> : <h1>About Page</h1>}
      </div>
    </div>
  );
}
render(<RouterSim />);`,
    challenges: [
      { title: "Dynamic Routes", description: "Simulate a route like /user/:id.", hint: "Use a state variable to represent the ID in your simulation." },
      { title: "404 Page", description: "Add a 'Not Found' state for unknown paths.", hint: "Use an 'else' or default case in your conditional rendering." }
    ],
    quizzes: [
      { question: "What is a Single Page Application (SPA)?", options: ["An app with only one page", "An app that doesn't reload the full page on navigation", "An app built with only HTML", "A mobile app"], answer: "An app that doesn't reload the full page on navigation", explanation: "SPAs update the UI dynamically as the user interacts, providing a smoother experience." }
    ],
    tips: ["Use <Link> instead of <a> tags to prevent full page reloads.", "Nested routes are great for layouts like sidebars."],
  },
  {
    id: 7,
    title: "Performance",
    subtitle: "useMemo, useCallback & React.memo",
    emoji: "⚡",
    colorScheme: "green",
    explanation: `Optimization techniques to prevent unnecessary re-renders and expensive calculations.`,
    eli12Explanation: `It's like having a super-smart brain that remembers the answer to a hard math problem so it doesn't have to do the work again!`,
    codeExample: `const ExpensiveComponent = React.memo(({ count }) => {
  console.log("Rendering expensive component...");
  return <div className="p-2 bg-green-100">Count: {count}</div>;
});

function App() {
  const [count, setCount] = React.useState(0);
  const [other, setOther] = React.useState(0);

  return (
    <div className="p-4 space-y-2">
      <button onClick={() => setCount(c => c + 1)} className="bg-green-500 text-white p-2 rounded">Inc Count</button>
      <button onClick={() => setOther(o => o + 1)} className="bg-gray-500 text-white p-2 rounded ml-2">Inc Other</button>
      <ExpensiveComponent count={count} />
      <p>Other: {other} (Changing this won't re-render the expensive component!)</p>
    </div>
  );
}
render(<App />);`,
    challenges: [
      { title: "Memoize a Function", description: "Use useCallback to prevent a function from being recreated on every render.", hint: "Wrap your event handler in useCallback." },
      { title: "Expensive Calculation", description: "Use useMemo to cache the result of a slow loop.", hint: "Wrap the loop logic in useMemo." }
    ],
    quizzes: [
      { question: "When should you use React.memo?", options: ["On every component", "On components that render often with the same props", "To fix syntax errors", "To connect to a database"], answer: "On components that render often with the same props", explanation: "React.memo prevents a component from re-rendering if its props haven't changed." }
    ],
    tips: ["Don't optimize prematurely; React is already very fast.", "Use the React DevTools Profiler to find actual bottlenecks."],
  },
  {
    id: 8,
    title: "Advanced Forms",
    subtitle: "Validation & Complex Inputs",
    emoji: "📝",
    colorScheme: "yellow",
    explanation: `Handling complex forms with multiple fields and real-time validation.`,
    eli12Explanation: `It's like a very picky teacher checking your homework while you write it. "Oops, you forgot your name!" "Wait, that's not an email!"`,
    codeExample: `function LoginForm() {
  const [form, setForm] = React.useState({ email: '', password: '' });
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.includes('@')) setError('Invalid email!');
    else alert('Logged in!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input 
        placeholder="Email" 
        className="border p-2 w-full"
        onChange={e => setForm({...form, email: e.target.value})}
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="border p-2 w-full"
        onChange={e => setForm({...form, password: e.target.value})}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button className="bg-yellow-500 w-full p-2 rounded">Login</button>
    </form>
  );
}
render(<LoginForm />);`,
    challenges: [
      { title: "Password Match", description: "Add a 'Confirm Password' field and validate that they match.", hint: "Compare form.password and form.confirmPassword." },
      { title: "Character Limit", description: "Show an error if the password is less than 8 characters.", hint: "Check form.password.length in the submit handler." }
    ],
    quizzes: [
      { question: "What is a 'Controlled Component'?", options: ["A component that is hard to use", "An input whose value is controlled by React state", "A component with a lot of CSS", "A component that doesn't change"], answer: "An input whose value is controlled by React state", explanation: "In controlled components, the 'source of truth' for input data is the component state." }
    ],
    tips: ["For very large forms, consider libraries like Formik or React Hook Form.", "Always validate on the server too!"],
  },
  {
    id: 9,
    title: "Mini Games",
    subtitle: "Building Interactive Fun",
    emoji: "🎮",
    colorScheme: "purple",
    explanation: `Using everything we've learned to build small games. This tests your state management and logic skills.`,
    eli12Explanation: `Now we're using our Lego bricks to build a working robot or a racing car!`,
    codeExample: `function TicTacToe() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const handleClick = (i) => {
    if (squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="grid grid-cols-3 gap-1 w-32 mx-auto">
      {squares.map((sq, i) => (
        <button key={i} onClick={() => handleClick(i)} className="w-10 h-10 border bg-white font-bold">
          {sq}
        </button>
      ))}
    </div>
  );
}
render(<TicTacToe />);`,
    challenges: [
      { title: "Reset Game", description: "Add a button to clear the board and start over.", hint: "Set the squares state back to an empty array." },
      { title: "Winner Message", description: "Check for a winner and display 'Winner: X' or 'Winner: O'.", hint: "Create a function that checks all winning combinations (rows, cols, diagonals)." }
    ],
    quizzes: [
      { question: "Why is state important for games?", options: ["It makes them look better", "It tracks the current score and board position", "It speeds up the game", "It's not important"], answer: "It tracks the current score and board position", explanation: "State allows the game to 'remember' what has happened so far." }
    ],
    tips: ["Break game logic into small helper functions.", "Use state to keep track of scores and game status."],
  },
  {
    id: 10,
    title: "Final Project",
    subtitle: "Build Your Own Course Site",
    emoji: "🏆",
    colorScheme: "pink",
    explanation: `The final challenge! Use all your skills to build a complete application.`,
    eli12Explanation: `You've graduated! Now you can build anything you can imagine. Go show the world!`,
    codeExample: `function FinalApp() {
  return (
    <div className="p-10 text-center bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl">
      <h1 className="text-4xl font-black mb-4">I am a React Master! 🎓</h1>
      <p className="text-xl">10 Days of hard work paid off.</p>
      <div className="mt-8 animate-bounce text-6xl">🏆</div>
    </div>
  );
}
render(<FinalApp />);`,
    challenges: [
      { title: "Portfolio Site", description: "Build a small portfolio with Home, Projects, and Contact sections.", hint: "Use everything you've learned: state, props, and maybe some context!" }
    ],
    quizzes: [
      { question: "What's the best way to learn React?", options: ["Watching videos", "Reading books", "Building projects", "Sleeping"], answer: "Building projects", explanation: "Hands-on practice is the most effective way to master any coding skill." }
    ],
    tips: ["Plan your component structure before you start coding.", "Keep your state as close to where it's needed as possible."],
  }
];
