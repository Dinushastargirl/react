import { DayTopic } from '../types';

export const courseData: DayTopic[] = [
  {
    id: 1,
    title: "React Fundamentals: The Big Picture",
    subtitle: "Declarative UI, Virtual DOM, and Component Architecture",
    emoji: "🚀",
    colorScheme: "blue",
    explanation: `React isn't just a library; it's a mental model for building UIs. To truly master it, you need to understand three core pillars:

### 1. Declarative vs. Imperative
In traditional JS (Imperative), you tell the browser *how* to change the DOM step-by-step: "Find this div, change its color, add this class." 
In React (Declarative), you describe *what* the UI should look like based on the current state: "If the user is logged in, show the Dashboard; otherwise, show the Login." React handles the "how" for you.

### 2. The Virtual DOM (The Secret Sauce)
Updating the real browser DOM is expensive and slow. React creates a lightweight copy called the **Virtual DOM**. 
When state changes:
1. React creates a new Virtual DOM tree.
2. It compares it with the old one (this is called **Diffing**).
3. It calculates the minimum number of changes needed.
4. It applies only those changes to the real DOM (this is called **Reconciliation**).

### 3. Component-Based Architecture
Think of components as self-contained "LEGO" bricks. Each brick has its own:
- **Structure (JSX)**: What it looks like.
- **Logic (JS)**: How it behaves.
- **Style (CSS)**: How it's decorated.

### Core Concepts to Master Today:
- **JSX**: It's not HTML. It's syntactic sugar for \`React.createElement()\`.
- **Functional Components**: Modern React uses functions, not classes.
- **Props**: Short for "properties". They are read-only and flow downwards.
- **State**: The "memory" of a component. When state changes, React re-renders.`,
    eli12Explanation: `Imagine you are a master architect. 
- **Declarative**: Instead of telling workers "pick up a brick, put it here, add cement," you just show them a picture of the finished house. They figure out the steps.
- **Virtual DOM**: Before building the real house, you build a tiny model out of paper. If you want to move a window, you try it on the paper model first to see if it looks good.
- **Components**: The house is made of pre-built rooms (Kitchen, Bedroom). You can move the Kitchen to a different house if you want!`,
    codeExample: `// 1. A simple functional component
function UserProfile({ username, joinDate }) {
  // 2. State: The component's internal memory
  const [isOnline, setIsOnline] = React.useState(false);

  // 3. Event Handler
  const toggleStatus = () => setIsOnline(!isOnline);

  return (
    <div className="p-8 bg-white rounded-[2rem] shadow-xl border-4 border-blue-100 max-w-md mx-auto">
      <div className="flex items-center space-x-4">
        <div className={\`w-16 h-16 rounded-full flex items-center justify-center text-2xl \${isOnline ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}\`}>
          {username[0].toUpperCase()}
        </div>
        <div>
          <h2 className="text-2xl font-black text-gray-900">{username}</h2>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Joined {joinDate}</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100">
        <p className="text-blue-800 font-medium">
          Status: <span className="font-black">{isOnline ? '🟢 ONLINE' : '⚪ OFFLINE'}</span>
        </p>
      </div>

      <button 
        onClick={toggleStatus}
        className="mt-6 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-95"
      >
        {isOnline ? 'Go Offline' : 'Go Online'}
      </button>
    </div>
  );
}

render(<UserProfile username="ReactMaster" joinDate="March 2024" />);`,
    challenges: [
      { title: "Add a Bio Prop", description: "Pass a 'bio' string as a prop and display it under the username.", hint: "Update the component signature to include 'bio' and add a <p> tag." },
      { title: "Dynamic Border Color", description: "Change the border color of the card based on the online status.", hint: "Use a template literal for the className: border-${isOnline ? 'green' : 'blue'}-100" },
      { title: "Last Seen Feature", description: "Add a new state 'lastSeen' that stores the current time whenever the user goes offline.", hint: "Use new Date().toLocaleTimeString() inside toggleStatus." }
    ],
    quizzes: [
      { 
        question: "What is the primary purpose of the Virtual DOM?", 
        options: ["To replace the real DOM", "To make UI updates faster by minimizing real DOM manipulation", "To store data in the browser", "To handle CSS animations"], 
        answer: "To make UI updates faster by minimizing real DOM manipulation", 
        explanation: "The Virtual DOM allows React to calculate the most efficient way to update the UI before touching the actual browser DOM." 
      },
      { 
        question: "How do props differ from state?", 
        options: ["Props are internal, state is external", "Props are read-only from parents, state is managed locally", "They are the same thing", "State is passed down, props are managed locally"], 
        answer: "Props are read-only from parents, state is managed locally", 
        explanation: "Props are like configuration passed into a component, while state is the component's private data that can change over time." 
      }
    ],
    miniProject: {
      title: "The Interactive Profile Card",
      description: "Build a profile card that allows users to edit their name and toggle a 'Pro' badge.",
      code: `function EditableProfile() {
  const [name, setName] = React.useState("Alex");
  const [isPro, setIsPro] = React.useState(false);

  return (
    <div className="p-6 bg-white rounded-3xl shadow-lg border-2 border-orange-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-black">{name}</h2>
        {isPro && <span className="bg-orange-500 text-white text-[10px] px-2 py-1 rounded-full font-black">PRO</span>}
      </div>
      
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 bg-gray-50 border-2 border-gray-100 rounded-xl mb-4 focus:border-orange-300 outline-none transition"
        placeholder="Enter name..."
      />

      <label className="flex items-center space-x-3 cursor-pointer group">
        <div className={\`w-12 h-6 rounded-full transition-colors \${isPro ? 'bg-orange-500' : 'bg-gray-200'}\`}>
          <div className={\`w-4 h-4 bg-white rounded-full mt-1 transition-transform \${isPro ? 'translate-x-7' : 'translate-x-1'}\`} />
        </div>
        <span className="font-bold text-gray-600 group-hover:text-orange-500 transition">Enable Pro Mode</span>
        <input type="checkbox" className="hidden" onChange={() => setIsPro(!isPro)} />
      </label>
    </div>
  );
}
render(<EditableProfile />);`
    },
    tips: [
      "Always use descriptive names for your state variables (e.g., 'isLoading' instead of 'val').",
      "Keep your components small and focused on one task (Single Responsibility Principle).",
      "JSX must have a single parent element (or use a Fragment <>...</>)."
    ],
  },
  {
    id: 2,
    title: "Dynamic UIs: Lists & Conditions",
    subtitle: "Mapping Data and Branching Logic in JSX",
    emoji: "🌿",
    colorScheme: "green",
    explanation: `Building real apps means working with dynamic data. Today we master how to render lists and show/hide content.

### 1. Rendering Lists with .map()
In React, we don't use \`for\` loops inside JSX. Instead, we use the JavaScript \`.map()\` method to transform an array of data into an array of components.

### 2. The Importance of 'key'
When you render a list, React needs a way to identify each item uniquely. 
- **Why?** If you reorder a list, React uses the \`key\` to know which DOM element to move, rather than re-rendering everything.
- **Rule**: Never use the array index as a key if the list can change (add/remove/sort). Use a unique ID from your data.

### 3. Conditional Rendering
There are three main ways to show content conditionally:
1. **If/Else (Outside JSX)**: Good for returning entirely different components.
2. **Ternary Operator (\`condition ? true : false\`)**: Perfect for small inline changes.
3. **Logical AND (\`condition && element\`)**: Great for "show this or nothing".

### Deep Dive: Pure Functions
React components should be "pure". This means they shouldn't change any variables that existed before they were called, and given the same props, they should always return the same JSX.`,
    eli12Explanation: `Imagine you have a list of your favorite snacks.
- **Lists**: Instead of writing "I like chips, I like cookies, I like apples," you just tell React: "For every snack in my bag, make a 'Yummy' label."
- **Keys**: Each snack needs a name tag. If you swap the chips and cookies, React sees the name tags and knows exactly which one moved!
- **Conditions**: It's like a rule: "If it's sunny, show the 'Go Outside' button. If it's raining, show the 'Watch Movie' button."`,
    codeExample: `function SnackList() {
  const snacks = [
    { id: 1, name: "🍎 Apple", healthy: true },
    { id: 2, name: "🍪 Cookie", healthy: false },
    { id: 3, name: "🥦 Broccoli", healthy: true },
    { id: 4, name: "🍕 Pizza", healthy: false },
  ];

  const [showOnlyHealthy, setShowOnlyHealthy] = React.useState(false);

  // Filter the list based on state
  const filteredSnacks = showOnlyHealthy 
    ? snacks.filter(s => s.healthy) 
    : snacks;

  return (
    <div className="p-6 bg-white rounded-3xl border-4 border-green-100 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-black text-green-700">My Snack Bag</h2>
        <button 
          onClick={() => setShowOnlyHealthy(!showOnlyHealthy)}
          className={\`px-4 py-2 rounded-full font-bold text-xs transition \${showOnlyHealthy ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'}\`}
        >
          {showOnlyHealthy ? 'Showing Healthy' : 'Show All'}
        </button>
      </div>

      <ul className="space-y-3">
        {filteredSnacks.map(snack => (
          <li 
            key={snack.id} 
            className="p-4 bg-green-50 rounded-2xl flex justify-between items-center border-2 border-green-100 animate-in fade-in slide-in-from-left"
          >
            <span className="font-bold text-lg">{snack.name}</span>
            {snack.healthy && <span className="text-[10px] bg-green-200 text-green-700 px-2 py-1 rounded-full font-black">HEALTHY</span>}
          </li>
        ))}
      </ul>

      {filteredSnacks.length === 0 && (
        <p className="text-center py-10 text-gray-400 font-bold italic">No snacks found! 😢</p>
      )}
    </div>
  );
}

render(<SnackList />);`,
    challenges: [
      { title: "Add a 'Delete' Button", description: "Add a button to each snack item that removes it from the list.", hint: "You'll need to move the 'snacks' array into state using useState." },
      { title: "Empty State Message", description: "If the list is empty, show a 'Refill Bag' button that resets the list.", hint: "Use conditional rendering: snacks.length === 0 && <button>..." },
      { title: "Sort by Name", description: "Add a button to sort the snacks alphabetically.", hint: "Use [...snacks].sort((a, b) => a.name.localeCompare(b.name))" }
    ],
    quizzes: [
      { 
        question: "Why should you avoid using the array index as a 'key'?", 
        options: ["It's too slow", "It can cause bugs when the list order changes", "React doesn't allow it", "It makes the code unreadable"], 
        answer: "It can cause bugs when the list order changes", 
        explanation: "If items are reordered or deleted, the index changes, which confuses React's reconciliation process." 
      },
      { 
        question: "Which JS method is most commonly used to render lists in React?", 
        options: [".forEach()", ".filter()", ".map()", ".reduce()"], 
        answer: ".map()", 
        explanation: "The .map() method returns a new array of JSX elements, which React can render directly." 
      }
    ],
    miniProject: {
      title: "The Smart Task List",
      description: "Build a todo list where tasks can be marked as 'Done' and filtered by status.",
      code: `function TaskManager() {
  const [tasks, setTasks] = React.useState([
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Build a Game", done: false },
  ]);
  const [input, setInput] = React.useState("");

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div className="p-6 bg-white rounded-3xl shadow-xl border-2 border-blue-100">
      <div className="flex gap-2 mb-6">
        <input 
          value={input} 
          onChange={e => setInput(e.target.value)}
          className="flex-1 p-3 bg-gray-50 rounded-xl border-2 border-gray-100 outline-none focus:border-blue-300"
          placeholder="What needs to be done?"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-6 rounded-xl font-black">+</button>
      </div>
      <div className="space-y-2">
        {tasks.map(t => (
          <div 
            key={t.id} 
            onClick={() => toggleTask(t.id)}
            className={\`p-4 rounded-2xl cursor-pointer transition \${t.done ? 'bg-gray-50 opacity-50 line-through' : 'bg-blue-50 hover:bg-blue-100'}\`}
          >
            <span className="font-bold">{t.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
render(<TaskManager />);`
    },
    tips: [
      "Keep your keys stable; don't use Math.random() for keys.",
      "You can use short-circuit evaluation (&&) for simple toggleable UI elements.",
      "Always treat state as immutable - use the setter function to update it."
    ],
  },
  {
    id: 3,
    title: "Side Effects: The useEffect Hook",
    subtitle: "Fetching Data, Subscriptions, and the Component Lifecycle",
    emoji: "⚡",
    colorScheme: "orange",
    explanation: `Most components need to interact with the "outside world" (APIs, timers, manual DOM changes). In React, these are called **Side Effects**.

### 1. What is useEffect?
The \`useEffect\` hook tells React that your component needs to do something *after* rendering. React will remember the function you passed and call it later.

### 2. The Dependency Array (The 'When')
This is the second argument to \`useEffect\`. It controls when the effect runs:
- **No array**: Runs after *every* render. (Dangerous!)
- **Empty array \`[]\`**: Runs only *once* (after the initial mount).
- **Array with values \`[prop, state]\`**: Runs after the initial mount AND whenever any value in the array changes.

### 3. The Cleanup Function
Sometimes an effect needs to "clean up" after itself (e.g., stopping a timer or unsubscribing from a socket). You do this by returning a function from your effect.

### 4. Data Fetching Pattern
The most common use for \`useEffect\` is fetching data from an API. 
1. Start with \`loading: true\`.
2. Fetch data in \`useEffect\`.
3. Update state with the data.
4. Set \`loading: false\`.`,
    eli12Explanation: `Imagine you are a robot.
- **Render**: You do your main job (like cleaning the floor).
- **useEffect**: After you finish cleaning, you check your "To-Do" list for extra tasks, like "Check if it's raining" or "Call the boss."
- **Dependencies**: You only check if it's raining if someone opens a window! If the window stays closed, you don't waste time checking.
- **Cleanup**: If you turned on a light to see the rain, you must remember to turn it off when you're done!`,
    codeExample: `function DataFetcher() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    setLoading(true);
    // Simulating an API call
    fetch(\`https://jsonplaceholder.typicode.com/posts/\${count}\`)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
      
    // Optional: Cleanup function
    return () => console.log("Cleaning up effect for ID:", count);
  }, [count]); // Only re-run when 'count' changes

  return (
    <div className="p-8 bg-white rounded-[3rem] border-4 border-orange-100 shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-black text-orange-600">Post Explorer</h2>
        <div className="flex items-center space-x-2">
          <button onClick={() => setCount(c => Math.max(1, c - 1))} className="p-2 bg-orange-100 rounded-lg">⬅️</button>
          <span className="font-black text-orange-500">ID: {count}</span>
          <button onClick={() => setCount(c => c + 1)} className="p-2 bg-orange-100 rounded-lg">➡️</button>
        </div>
      </div>

      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-orange-400 font-bold animate-pulse">Fetching data...</p>
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in zoom-in duration-500">
          <h3 className="text-xl font-black text-gray-800 leading-tight uppercase">{data.title}</h3>
          <p className="text-gray-500 leading-relaxed">{data.body}</p>
        </div>
      )}
    </div>
  );
}

render(<DataFetcher />);`,
    challenges: [
      { title: "Window Resize Listener", description: "Add an effect that logs the window width whenever it changes.", hint: "Use window.addEventListener('resize', ...) and don't forget the cleanup!" },
      { title: "Auto-Increment Timer", description: "Create a timer that increments a 'seconds' state every second.", hint: "Use setInterval inside useEffect and clearInterval in the cleanup." },
      { title: "Search Input Debounce", description: "Only trigger the API fetch 500ms after the user stops typing.", hint: "Use setTimeout and clear it if the input changes again before the time is up." }
    ],
    quizzes: [
      { 
        question: "When does an effect with an empty dependency array [] run?", 
        options: ["Every render", "Only once, after the first render", "Never", "Only when the component unmounts"], 
        answer: "Only once, after the first render", 
        explanation: "An empty array tells React the effect doesn't depend on any values from props or state, so it never needs to re-run." 
      },
      { 
        question: "What is the purpose of the cleanup function in useEffect?", 
        options: ["To delete the component", "To reset the state", "To stop ongoing processes like timers or subscriptions", "To speed up the next render"], 
        answer: "To stop ongoing processes like timers or subscriptions", 
        explanation: "Cleanup functions prevent memory leaks and unexpected behavior by stopping side effects before the component unmounts or the effect re-runs." 
      }
    ],
    miniProject: {
      title: "The Crypto Price Tracker",
      description: "Build a simple app that fetches the current price of Bitcoin every 10 seconds.",
      code: `function CryptoTracker() {
  const [price, setPrice] = React.useState(null);

  React.useEffect(() => {
    const fetchPrice = () => {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(res => res.json())
        .then(data => setPrice(data.bpi.USD.rate));
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2.5rem] text-white text-center shadow-2xl">
      <h2 className="text-xl font-bold uppercase tracking-widest opacity-80 mb-2">Bitcoin Price (USD)</h2>
      <div className="text-5xl font-black mb-4">
        {price ? \`$\${price}\` : "Loading..."}
      </div>
      <p className="text-xs font-medium opacity-60 italic">Updates every 10 seconds</p>
    </div>
  );
}
render(<CryptoTracker />);`
    },
    tips: [
      "Always include every variable from the component scope used inside the effect in the dependency array.",
      "Don't use useEffect for things that can be calculated during render.",
      "Keep your effects small; use multiple useEffect calls for different tasks."
    ],
  },
  {
    id: 4,
    title: "Global State: Context API",
    subtitle: "Stop Prop Drilling & Share Data Everywhere",
    emoji: "🌍",
    colorScheme: "blue",
    explanation: `As your app grows, passing data through 10 layers of components (Prop Drilling) becomes a nightmare. Imagine a delivery driver having to stop at every house on a street just to give a package to the last house. 📦

The Context API is like a **Global Broadcast System** or a **Cloud Storage** for your app. You put data in a "Provider" at the top, and any component below can "Consume" it directly, skipping the middle-men.

### The Three Pillars of Context:
1. **createContext**: Creating the "Radio Station".
2. **Provider**: The "Antenna" that broadcasts the signal to all children.
3. **useContext**: The "Radio Receiver" that picks up the signal in any component.

### When to use it?
- User Authentication (Logged in user info)
- Theme (Dark/Light mode)
- Language settings
- Shopping Cart state`,
    eli12Explanation: "Imagine your app is a big house. Instead of carrying a heavy box from the front door, through the kitchen, up the stairs, and into your bedroom, you just put the box in a magic elevator. 🛗 Now, anyone in any room can just press a button and the box appears! Context is that magic elevator for your data.",
    codeExample: `const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeButton = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <button 
      onClick={toggleTheme}
      className={theme === 'light' ? 'bg-gray-100 text-gray-800 p-4 rounded-xl border-2' : 'bg-gray-800 text-white p-4 rounded-xl border-2'}
    >
      Current Theme: {theme.toUpperCase()}
    </button>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="p-10 text-center">
        <h3 className="text-xl font-bold mb-4">Context API Demo</h3>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}
render(<App />);`,
    challenges: [
      {
        title: "User Context",
        description: "Create a UserContext that stores a username and a function to update it. Display the username in a child component.",
        hint: "Use React.createContext('Guest') as the default value."
      },
      {
        title: "Multi-Context",
        description: "Try nesting two different Providers (Theme and User) and consume both in a single component.",
        hint: "You can call useContext multiple times in one component!"
      }
    ],
    quizzes: [
      {
        question: "What is 'Prop Drilling'?",
        options: [
          "A way to optimize React performance",
          "Passing props through components that don't need them just to reach a deep child",
          "A tool for debugging React state",
          "The process of converting JSX to HTML"
        ],
        answer: "Passing props through components that don't need them just to reach a deep child",
        explanation: "Prop drilling makes code hard to maintain because many components become 'middle-men' for data they don't use."
      },
      {
        question: "Which hook is used to consume a Context?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        answer: "useContext",
        explanation: "useContext(MyContext) returns the current value of that context."
      },
      {
        question: "Where should the Provider be placed?",
        options: [
          "Inside the component that needs the data",
          "At the very bottom of the component tree",
          "Above all components that need access to the data",
          "It doesn't matter"
        ],
        answer: "Above all components that need access to the data",
        explanation: "Only children of a Provider can access its data."
      }
    ],
    miniProject: {
      title: "Global Notification System",
      description: "Build a system where any component can trigger a 'Toast' notification that appears at the top of the screen using Context.",
      code: `const NotificationContext = React.createContext();

const NotificationProvider = ({ children }) => {
  const [msg, setMsg] = React.useState('');
  const notify = (text) => {
    setMsg(text);
    setTimeout(() => setMsg(''), 3000);
  };
  return (
    <NotificationContext.Provider value={notify}>
      {msg && (
        <div className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded-xl shadow-2xl animate-bounce z-50">
          ✅ {msg}
        </div>
      )}
      {children}
    </NotificationContext.Provider>
  );
};

const ActionButton = () => {
  const notify = React.useContext(NotificationContext);
  return (
    <button 
      onClick={() => notify('Action Successful!')}
      className="px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition"
    >
      Trigger Global Alert
    </button>
  );
};

function App() {
  return (
    <NotificationProvider>
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Notification System</h2>
        <ActionButton />
      </div>
    </NotificationProvider>
  );
}
render(<App />);`
    },
    tips: [
      "Don't put EVERYTHING in Context. Use it for truly global data.",
      "Context triggers a re-render for all consumers when the value changes.",
      "Consider using useReducer with Context for complex global state."
    ]
  },
  {
    id: 5,
    title: "Custom Hooks: Logic Reuse",
    subtitle: "Build Your Own Superpowers",
    emoji: "🎣",
    colorScheme: "pink",
    explanation: `React Hooks are great, but sometimes you find yourself writing the same logic (like fetching data or tracking window size) in 5 different components. 🔄

**Custom Hooks** allow you to extract that logic into a reusable function. A Custom Hook is just a JavaScript function whose name starts with "use" and that can call other Hooks.

### Why use Custom Hooks?
1. **Clean Components**: Your components focus on UI, while hooks handle the "brain" work.
2. **Reusability**: Write once, use everywhere.
3. **Testability**: It's easier to test logic when it's isolated in a hook.

### The Rule of Thumb:
If you have a \`useEffect\` or \`useState\` block that you're copy-pasting, it's time for a Custom Hook!`,
    eli12Explanation: "Imagine you have a special recipe for magic cookies. Instead of writing the whole recipe down every time you want to bake, you just write 'Magic Cookie Recipe' on a card. Now, whenever you want cookies, you just use that card! Custom Hooks are like those recipe cards for your code.",
    codeExample: `function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);
  
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
}

function App() {
  const width = useWindowWidth();
  
  return (
    <div className="p-10 text-center transition-all duration-500" style={{ 
      background: width < 600 ? '#ffebee' : '#e3f2fd'
    }}>
      <h2 className="text-2xl font-black mb-4">Window Width Tracker</h2>
      <p className="text-5xl font-black text-blue-600 mb-4">{width}px</p>
      <p className="font-bold">{width < 600 ? "📱 Mobile View" : "💻 Desktop View"}</p>
    </div>
  );
}
render(<App />);`,
    challenges: [
      {
        title: "useLocalStorage",
        description: "Create a hook that syncs a state value with localStorage so it persists after refresh.",
        hint: "Use JSON.stringify and JSON.parse inside your hook."
      },
      {
        title: "useToggle",
        description: "Create a simple hook that returns a boolean and a function to flip it (true/false).",
        hint: "const [val, setVal] = useState(initial); const toggle = () => setVal(!val);"
      }
    ],
    quizzes: [
      {
        question: "What must a Custom Hook's name start with?",
        options: ["get", "handle", "use", "react"],
        answer: "use",
        explanation: "React relies on the 'use' prefix to identify hooks and enforce the Rules of Hooks."
      },
      {
        question: "Can Custom Hooks call other hooks?",
        options: ["Yes", "No", "Only useState", "Only useEffect"],
        answer: "Yes",
        explanation: "Custom hooks are designed to compose other hooks into reusable logic."
      },
      {
        question: "What is the main benefit of Custom Hooks?",
        options: [
          "They make the app run faster",
          "They allow sharing logic between components without repeating code",
          "They replace the need for components",
          "They automatically style your app"
        ],
        answer: "They allow sharing logic between components without repeating code",
        explanation: "Reusability and cleaner code are the primary goals."
      }
    ],
    miniProject: {
      title: "The 'useFetch' Master Hook",
      description: "Create a robust hook that handles loading states, error handling, and data fetching for any URL.",
      code: `function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

  if (loading) return <p className="p-10 text-center font-bold">Loading user data...</p>;
  if (error) return <p className="p-10 text-center text-red-500">Error: {error}</p>;

  return (
    <div className="p-8 bg-pink-50 rounded-3xl border-4 border-pink-100 shadow-xl">
      <h2 className="text-2xl font-black text-pink-700 mb-4">User Profile (Fetched)</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Company:</strong> {data.company.name}</p>
      </div>
    </div>
  );
}
render(<App />);`
    },
    tips: [
      "Keep hooks focused on one piece of logic.",
      "Return objects from hooks if they return multiple values (easier to destructure).",
      "Custom hooks are just functions - you can pass arguments to them!"
    ]
  },
  {
    id: 6,
    title: "Routing: Multi-Page Apps",
    subtitle: "Navigate Your App with React Router",
    emoji: "🗺️",
    colorScheme: "blue",
    explanation: `In the old days, clicking a link meant the browser had to ask the server for a whole new HTML file. 🐌 In modern React apps, we use **Client-Side Routing**.

The app stays on one page, but the URL changes, and React simply swaps out one component for another. It feels instant!

### Key Concepts of React Router:
1. **BrowserRouter**: The parent that keeps track of the URL.
2. **Routes & Route**: Mapping a path (like \`/about\`) to a component.
3. **Link**: A special component that changes the URL without refreshing the page.
4. **useParams**: A hook to grab dynamic parts of the URL (like \`/user/:id\`).
5. **useNavigate**: A hook to change the page programmatically (e.g., after a login).`,
    eli12Explanation: "Imagine your app is a big museum. Instead of leaving the building and coming back in through a different door to see a new room, you just walk through a magic door inside. The museum stays the same, but the room you're in changes instantly! Routing is that magic door.",
    codeExample: `// Note: In this playground, we simulate routing with state
// because we are inside a single component environment.

function Home() { return <div className="p-10 bg-blue-50 rounded-2xl">🏠 Welcome Home!</div>; }
function About() { return <div className="p-10 bg-green-50 rounded-2xl">📖 About Us</div>; }
function Contact() { return <div className="p-10 bg-purple-50 rounded-2xl">📞 Contact Info</div>; }

function App() {
  const [path, setPath] = React.useState('home');
  
  return (
    <div className="p-6 border-4 border-blue-100 rounded-[2rem] shadow-xl">
      <nav className="flex justify-center space-x-4 mb-8">
        <button 
          onClick={() => setPath('home')}
          className={\`px-4 py-2 rounded-full font-bold \${path === 'home' ? 'bg-blue-500 text-white' : 'bg-gray-100'}\`}
        >Home</button>
        <button 
          onClick={() => setPath('about')}
          className={\`px-4 py-2 rounded-full font-bold \${path === 'about' ? 'bg-blue-500 text-white' : 'bg-gray-100'}\`}
        >About</button>
        <button 
          onClick={() => setPath('contact')}
          className={\`px-4 py-2 rounded-full font-bold \${path === 'contact' ? 'bg-blue-500 text-white' : 'bg-gray-100'}\`}
        >Contact</button>
      </nav>
      
      <div className="animate-in fade-in zoom-in duration-300">
        {path === 'home' && <Home />}
        {path === 'about' && <About />}
        {path === 'contact' && <Contact />}
      </div>
    </div>
  );
}
render(<App />);`,
    challenges: [
      {
        title: "Dynamic Profile Route",
        description: "Simulate a route that takes a 'username' and displays 'Profile of [username]'.",
        hint: "Use a state variable to represent the current username in the URL."
      },
      {
        title: "Protected Route",
        description: "Create a logic where the 'Admin' page only shows if an 'isLoggedIn' state is true.",
        hint: "Use a ternary operator: isLoggedIn ? <Admin /> : <RedirectToLogin />"
      }
    ],
    quizzes: [
      {
        question: "What does SPA stand for?",
        options: ["Simple Page Application", "Single Page Application", "Static Page App", "Super Performance App"],
        answer: "Single Page Application",
        explanation: "SPAs load once and update dynamically, providing a fluid user experience."
      },
      {
        question: "Which component is used instead of <a> tags in React Router?",
        options: ["<NavLink>", "<Url>", "<Link>", "<Route>"],
        answer: "<Link>",
        explanation: "<Link> prevents the browser from doing a full page refresh."
      },
      {
        question: "How do you get parameters from a URL like /user/:id?",
        options: ["useParams()", "useUrl()", "getQuery()", "useLocation()"],
        answer: "useParams()",
        explanation: "useParams returns an object of key/value pairs from the URL path."
      }
    ],
    miniProject: {
      title: "The 'Breadcrumb' Navigator",
      description: "Build a navigation system that shows your current 'path' and allows you to go back, simulating a browser's history.",
      code: `function App() {
  const [history, setHistory] = React.useState(['Home']);
  const current = history[history.length - 1];
  
  const navigateTo = (page) => setHistory([...history, page]);
  const goBack = () => history.length > 1 && setHistory(history.slice(0, -1));
  
  return (
    <div className="p-8 bg-white rounded-3xl border-4 border-blue-100 shadow-2xl">
      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
        {history.map((h, i) => (
          <React.Fragment key={i}>
            <span>{h}</span>
            {i < history.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
      
      <h2 className="text-3xl font-black mb-6">Current: {current}</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => navigateTo('Products')} className="p-4 bg-blue-500 text-white rounded-xl font-bold">Go to Products</button>
        <button onClick={() => navigateTo('Settings')} className="p-4 bg-blue-500 text-white rounded-xl font-bold">Go to Settings</button>
        <button onClick={goBack} className="p-4 bg-gray-200 text-gray-600 rounded-xl font-bold col-span-2">⬅️ Go Back</button>
      </div>
    </div>
  );
}
render(<App />);`
    },
    tips: [
      "Always provide a '404 Not Found' route for unexpected URLs.",
      "Use nested routes to keep your layouts (like sidebars) consistent.",
      "NavLink is like Link but automatically adds an 'active' class when the URL matches."
    ]
  },
  {
    id: 7,
    title: "Performance: Speed Up Your App",
    subtitle: "Memoization & Optimization Secrets",
    emoji: "⚡",
    colorScheme: "green",
    explanation: `React is fast by default, but as your app grows, it can start to feel sluggish. 🐢 This usually happens because components are re-rendering when they don't need to.

### The 3 Performance Superpowers:
1. **React.memo**: Tells a component: "Don't re-render unless your props actually change!"
2. **useMemo**: Remembers the result of an expensive calculation so you don't do it again.
3. **useCallback**: Remembers a function definition so it doesn't get recreated on every render.

### When to optimize?
**Rule #1**: Don't optimize too early! Only use these tools if you notice a real lag. Over-using them can actually make your app slower because React has to do extra work to "remember" things.`,
    eli12Explanation: "Imagine you have a friend who is really good at math. Every time you ask 'What is 1234 times 5678?', they spend 5 minutes calculating it. If you ask the same question again, they do the work all over again! Memoization is like giving your friend a notebook to write down the answers so they can just read them back to you instantly.",
    codeExample: `const ExpensiveComponent = React.memo(({ count }) => {
  console.log("Rendering expensive component...");
  return (
    <div className="p-6 bg-green-50 rounded-2xl border-2 border-green-200">
      <h4 className="font-bold">I only re-render if 'count' changes!</h4>
      <p className="text-3xl font-black text-green-600">{count}</p>
    </div>
  );
});

function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('');

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-bold text-gray-400">Type here (won't trigger ExpensiveComponent):</p>
        <input 
          value={text} 
          onChange={e => setText(e.target.value)}
          className="w-full p-3 border-2 rounded-xl outline-none focus:border-green-400"
          placeholder="Type something..."
        />
      </div>
      
      <button 
        onClick={() => setCount(c => c + 1)}
        className="w-full py-4 bg-green-500 text-white rounded-xl font-black shadow-lg"
      >
        Increment Count
      </button>
      
      <ExpensiveComponent count={count} />
    </div>
  );
}
render(<App />);`,
    challenges: [
      {
        title: "The Filter Memo",
        description: "Use useMemo to cache a filtered list of 1000 items so it only re-calculates when the search query changes.",
        hint: "const filtered = useMemo(() => list.filter(...), [query]);"
      },
      {
        title: "Stable Callback",
        description: "Pass a function to a memoized child component. Use useCallback to ensure the child doesn't re-render.",
        hint: "Wrap your function in useCallback(() => { ... }, []);"
      }
    ],
    quizzes: [
      {
        question: "What does React.memo do?",
        options: [
          "Makes the component run faster",
          "Prevents a component from re-rendering if props are the same",
          "Automatically saves state to a database",
          "Deletes unused code"
        ],
        answer: "Prevents a component from re-rendering if props are the same",
        explanation: "It performs a shallow comparison of props to decide if a re-render is necessary."
      },
      {
        question: "When should you use useMemo?",
        options: [
          "For every single variable",
          "For expensive calculations that don't need to run on every render",
          "To replace useState",
          "To fetch data from an API"
        ],
        answer: "For expensive calculations that don't need to run on every render",
        explanation: "useMemo caches the result of a function call."
      },
      {
        question: "What is a common pitfall of over-optimization?",
        options: [
          "The app becomes too fast",
          "The code becomes harder to read and might actually be slower",
          "React will crash",
          "It's always good to optimize everything"
        ],
        answer: "The code becomes harder to read and might actually be slower",
        explanation: "Memoization has its own overhead; use it only when needed."
      }
    ],
    miniProject: {
      title: "The 'Lag-Free' Search List",
      description: "Build a list of 500 items that can be filtered. Use useMemo to ensure the filtering logic doesn't slow down the typing experience.",
      code: `const items = Array.from({ length: 500 }, (_, i) => \`Item \${i + 1}\`);

function App() {
  const [query, setQuery] = React.useState('');
  
  // This calculation is cached!
  const filteredItems = React.useMemo(() => {
    console.log('Filtering...');
    return items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <div className="p-8 bg-white rounded-3xl border-4 border-green-100 shadow-2xl">
      <input 
        type="text"
        placeholder="Search 500 items..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full p-4 border-2 rounded-2xl mb-6 outline-none focus:border-green-500"
      />
      
      <div className="h-48 overflow-y-auto space-y-2 pr-2">
        {filteredItems.map(item => (
          <div key={item} className="p-3 bg-green-50 rounded-xl font-bold text-green-700 border border-green-100">
            {item}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-gray-400 font-bold uppercase">Found: {filteredItems.length} items</p>
    </div>
  );
}
render(<App />);`
    },
    tips: [
      "Use the React DevTools Profiler to see which components are re-rendering.",
      "Most performance issues are caused by large lists without 'key' or deep component trees.",
      "Remember: useMemo is for values, useCallback is for functions."
    ]
  },
  {
    id: 8,
    title: "Advanced Forms: Control & Validation",
    subtitle: "Mastering Inputs, Errors, and User Feedback",
    emoji: "📝",
    colorScheme: "yellow",
    explanation: `Forms are the bridge between your user and your data. 🌉 In React, we prefer **Controlled Components**, where React state is the "single source of truth" for every input.

### Controlled vs Uncontrolled:
- **Controlled**: React handles the value and changes. (Best for validation).
- **Uncontrolled**: The DOM handles the value (using \`useRef\`). (Best for simple, non-React integrations).

### Validation Strategies:
1. **Real-time**: Check for errors as the user types (e.g., "Password too short").
2. **On Blur**: Check when the user leaves the field.
3. **On Submit**: Check everything before sending to the server.

### Form Libraries:
For huge forms, developers often use libraries like **React Hook Form** or **Formik** to handle the complexity.`,
    eli12Explanation: "Imagine you're filling out a permission slip for a school trip. A 'Controlled Form' is like having a teacher standing next to you, pointing out mistakes the moment you make them. 'Oops, you forgot your phone number!' This way, the form is perfect before you even hand it in.",
    codeExample: `function LoginForm() {
  const [form, setForm] = React.useState({ email: '', password: '' });
  const [errors, setErrors] = React.useState({});

  const validate = (name, value) => {
    if (name === 'email' && !value.includes('@')) return 'Invalid email address';
    if (name === 'password' && value.length < 6) return 'Password must be 6+ chars';
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  return (
    <div className="p-8 bg-white rounded-3xl border-4 border-yellow-100 shadow-xl space-y-4">
      <h3 className="text-xl font-bold text-yellow-700">Secure Login</h3>
      
      <div className="space-y-1">
        <input 
          name="email"
          placeholder="Email" 
          className={\`w-full p-3 border-2 rounded-xl outline-none transition \${errors.email ? 'border-red-300 bg-red-50' : 'focus:border-yellow-400'}\`}
          onChange={handleChange}
        />
        {errors.email && <p className="text-xs text-red-500 font-bold">{errors.email}</p>}
      </div>

      <div className="space-y-1">
        <input 
          name="password"
          type="password"
          placeholder="Password" 
          className={\`w-full p-3 border-2 rounded-xl outline-none transition \${errors.password ? 'border-red-300 bg-red-50' : 'focus:border-yellow-400'}\`}
          onChange={handleChange}
        />
        {errors.password && <p className="text-xs text-red-500 font-bold">{errors.password}</p>}
      </div>

      <button 
        disabled={Object.values(errors).some(e => e !== '') || !form.email}
        className="w-full py-3 bg-yellow-500 text-white rounded-xl font-black shadow-lg disabled:opacity-50"
      >
        Sign In
      </button>
    </div>
  );
}
render(<LoginForm />);`,
    challenges: [
      {
        title: "Confirm Password",
        description: "Add a 'Confirm Password' field and show an error if it doesn't match the first password.",
        hint: "Check if form.password === form.confirmPassword in your validation logic."
      },
      {
        title: "Dynamic Form",
        description: "Create a form where clicking 'Add Hobby' adds a new text input to a list of hobbies.",
        hint: "Store hobbies as an array in state: [ 'Hobby 1', 'Hobby 2' ]"
      }
    ],
    quizzes: [
      {
        question: "What is a 'Controlled Component'?",
        options: [
          "A component that is hard to move",
          "An input whose value is driven by React state",
          "A component that only works on desktop",
          "A component with no state"
        ],
        answer: "An input whose value is driven by React state",
        explanation: "React state is the single source of truth for the input's value."
      },
      {
        question: "How do you handle multiple inputs in one state object?",
        options: [
          "Create a separate useState for each",
          "Use the spread operator: setForm({ ...form, [name]: value })",
          "You can't do that in React",
          "Use a global variable"
        ],
        answer: "Use the spread operator: setForm({ ...form, [name]: value })",
        explanation: "This updates only the specific field while keeping the rest of the form data intact."
      }
    ],
    miniProject: {
      title: "The 'Smart' Signup Wizard",
      description: "Build a multi-step signup form (Step 1: Account, Step 2: Profile) with validation at each step.",
      code: `function App() {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({ email: '', name: '', bio: '' });

  return (
    <div className="p-8 bg-white rounded-3xl border-4 border-yellow-100 shadow-2xl">
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map(s => (
          <div key={s} className={\`w-8 h-8 rounded-full flex items-center justify-center font-bold \${step >= s ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-400'}\`}>
            {s}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right">
          <h3 className="text-xl font-bold">Step 1: Account</h3>
          <input 
            placeholder="Email" 
            className="w-full p-3 border-2 rounded-xl"
            onChange={e => setData({...data, email: e.target.value})}
          />
          <button onClick={() => setStep(2)} className="w-full py-3 bg-yellow-500 text-white rounded-xl font-bold">Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right">
          <h3 className="text-xl font-bold">Step 2: Profile</h3>
          <input 
            placeholder="Full Name" 
            className="w-full p-3 border-2 rounded-xl"
            onChange={e => setData({...data, name: e.target.value})}
          />
          <textarea 
            placeholder="Bio" 
            className="w-full p-3 border-2 rounded-xl"
            onChange={e => setData({...data, bio: e.target.value})}
          />
          <div className="flex gap-2">
            <button onClick={() => setStep(1)} className="w-1/2 py-3 bg-gray-100 rounded-xl font-bold">Back</button>
            <button onClick={() => setStep(3)} className="w-1/2 py-3 bg-yellow-500 text-white rounded-xl font-bold">Finish</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center space-y-4 animate-in zoom-in">
          <h3 className="text-2xl font-black text-green-600">Success! 🎉</h3>
          <p className="font-bold">Welcome, {data.name}!</p>
          <button onClick={() => setStep(1)} className="text-yellow-600 font-bold underline">Start Over</button>
        </div>
      )}
    </div>
  );
}
render(<App />);`
    },
    tips: [
      "Use 'type=\"email\"' and 'type=\"number\"' for basic browser-level validation.",
      "Always prevent the default form submission with 'e.preventDefault()'.",
      "For complex forms, consider using a library like React Hook Form to reduce re-renders."
    ]
  },
  {
    id: 9,
    title: "Project: Tic-Tac-Toe Mastery",
    subtitle: "Putting It All Together in a Real Game",
    emoji: "🎮",
    colorScheme: "orange",
    explanation: `Today is the ultimate test! 🏆 We are building a full **Tic-Tac-Toe** game from scratch. This project uses every single concept we've learned:
- **Components**: Square, Board, and Game.
- **State**: Tracking the board, the current player, and the winner.
- **Props**: Passing data and functions between components.
- **Logic**: Calculating the winner after every move.
- **Conditional Rendering**: Showing the status or the winner.

### The Game Logic:
We store the board as an array of 9 nulls: \`[null, null, ...]\`. When a player clicks a square, we update that index with 'X' or 'O'. Then, we check a list of "Winning Patterns" (like 0,1,2 or 3,4,5) to see if someone won.`,
    eli12Explanation: "We're going to build a real game! It's like building a digital playground where the computer remembers whose turn it is, checks if anyone won, and lets you play again. It's the perfect way to show off your new React muscles!",
    codeExample: `function Square({ value, onClick }) {
  return (
    <button 
      className="w-20 h-20 bg-white border-2 border-orange-100 rounded-2xl text-3xl font-black text-orange-600 shadow-sm hover:shadow-md transition active:scale-90"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

function Game() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const calculateWinner = (sq) => {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) return sq[a];
    }
    return null;
  };

  const winner = calculateWinner(squares);
  const status = winner ? \`Winner: \${winner} 🏆\` : \`Next player: \${xIsNext ? 'X' : 'O'}\`;

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-8 bg-orange-50 rounded-[3rem] border-4 border-orange-100 shadow-2xl">
      <h2 className={\`text-2xl font-black \${winner ? 'text-green-600 animate-bounce' : 'text-orange-700'}\`}>{status}</h2>
      <div className="grid grid-cols-3 gap-3">
        {squares.map((sq, i) => (
          <Square key={i} value={sq} onClick={() => handleClick(i)} />
        ))}
      </div>
      <button 
        onClick={() => setSquares(Array(9).fill(null))}
        className="px-6 py-2 bg-white text-orange-600 rounded-full font-bold shadow-sm hover:shadow-md transition"
      >
        Reset Game
      </button>
    </div>
  );
}
render(<Game />);`,
    challenges: [
      {
        title: "History Feature",
        description: "Add a 'History' list that lets you jump back to any previous move in the game.",
        hint: "Store an array of board states: [ [null...], ['X', null...] ]"
      },
      {
        title: "Draw State",
        description: "Update the status to say 'It's a Draw!' if all squares are filled and there is no winner.",
        hint: "Check if !winner && squares.every(sq => sq !== null)"
      }
    ],
    quizzes: [
      {
        question: "Why do we use squares.slice() before updating state?",
        options: [
          "To make the code look better",
          "To keep state immutable and prevent side effects",
          "Because React requires it for all arrays",
          "To speed up the game"
        ],
        answer: "To keep state immutable and prevent side effects",
        explanation: "Immutability allows React to easily detect changes and optimize rendering."
      },
      {
        question: "What is the best way to calculate the winner?",
        options: [
          "Ask the user who won",
          "Check every possible winning combination after every move",
          "Wait until the board is full",
          "Use a random number generator"
        ],
        answer: "Check every possible winning combination after every move",
        explanation: "This ensures the game ends immediately when someone wins."
      }
    ],
    miniProject: {
      title: "The Ultimate Game Dashboard",
      description: "Extend the game with a scoreboard that tracks how many times X and O have won across multiple rounds.",
      code: `function App() {
  const [scores, setScores] = React.useState({ X: 0, O: 0 });
  // ... (Add game logic here and update scores when winner is found)
  return (
    <div className="p-10 text-center space-y-8">
      <div className="flex justify-center space-x-12">
        <div className="text-center">
          <p className="text-4xl font-black text-blue-600">{scores.X}</p>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Player X</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-black text-red-600">{scores.O}</p>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Player O</p>
        </div>
      </div>
      <p className="italic text-gray-400">Game logic goes here! 🎮</p>
    </div>
  );
}
render(<App />);`
    },
    tips: [
      "Break your game down into the smallest possible components.",
      "Keep your logic separate from your UI as much as possible.",
      "Use descriptive names for your winning patterns and game states."
    ]
  },
  {
    id: 10,
    title: "The Road Ahead: Mastery",
    subtitle: "Deployment, Ecosystem & Next Steps",
    emoji: "🚀",
    colorScheme: "purple",
    explanation: `Congratulations! 🎊 You've built a solid foundation in React. But the journey doesn't end here. The React ecosystem is vast and exciting.

### What's Next?
1. **Deployment**: Share your app with the world using **Vercel**, **Netlify**, or **GitHub Pages**.
2. **State Management**: Learn **Redux Toolkit** or **Zustand** for massive applications.
3. **Frameworks**: Explore **Next.js** (the industry standard for production React apps).
4. **Styling**: Deep dive into **Tailwind CSS** or **Styled Components**.
5. **Backend**: Connect your React app to **Firebase** or a **Node.js** server.

### The Secret to Mastery:
**Build. Build. Build.** 🛠️ The best way to learn is to start a project you're passionate about. Don't worry about making it perfect; just make it work!`,
    eli12Explanation: "You've finished the training! 🎓 You're now a junior React wizard. But a wizard's power comes from practice. Go out there, build magic things, and don't be afraid to make mistakes. That's how you get even stronger!",
    codeExample: `function GraduationCard() {
  const [celebrated, setCelebrated] = React.useState(false);
  
  return (
    <div className="p-12 text-center bg-gradient-to-br from-purple-500 to-indigo-600 rounded-[3rem] text-white shadow-2xl overflow-hidden relative">
      {celebrated && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute animate-bounce"
              style={{ 
                left: \`\${Math.random() * 100}%\`, 
                top: \`\${Math.random() * 100}%\`,
                fontSize: '24px'
              }}
            >
              {['🎉', '✨', '🎓', '🔥'][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>
      )}
      
      <h2 className="text-4xl font-black mb-4">You Did It!</h2>
      <p className="text-purple-100 text-lg mb-8 font-medium">10 Days of React Mastery Completed.</p>
      
      <button 
        onClick={() => setCelebrated(true)}
        className="px-10 py-4 bg-white text-purple-600 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition active:scale-95"
      >
        CELEBRATE! 🎊
      </button>
    </div>
  );
}
render(<GraduationCard />);`,
    challenges: [
      {
        title: "Deploy Your App",
        description: "Take one of your mini-projects and deploy it to Vercel or Netlify.",
        hint: "It's as simple as connecting your GitHub repo!"
      },
      {
        title: "Learn Next.js",
        description: "Research what 'Server-Side Rendering' means and why it's useful.",
        hint: "Next.js makes React apps SEO-friendly and super fast."
      }
    ],
    quizzes: [
      {
        question: "Which platform is popular for deploying React apps?",
        options: ["Vercel", "Netlify", "GitHub Pages", "All of the above"],
        answer: "All of the above",
        explanation: "All these platforms offer great support for modern frontend frameworks."
      },
      {
        question: "What is the most important thing to do next?",
        options: [
          "Read more books",
          "Watch 100 more tutorials",
          "Build your own projects",
          "Wait for React 20"
        ],
        answer: "Build your own projects",
        explanation: "Hands-on practice is the only way to truly master React."
      }
    ],
    miniProject: {
      title: "The 'Portfolio' Foundation",
      description: "Start building your personal portfolio site using everything you've learned. Include a list of your 10-day projects!",
      code: `function Portfolio() {
  const projects = [
    "Smart Task List", "Simple Quiz App", "Crypto Tracker", 
    "Notification System", "Fetch Master", "Breadcrumb Nav", 
    "Lag-Free List", "Signup Wizard", "Tic-Tac-Toe"
  ];

  return (
    <div className="p-8 bg-white rounded-3xl border-4 border-purple-100 shadow-xl">
      <h2 className="text-2xl font-black text-purple-700 mb-6">My React Journey</h2>
      <div className="grid grid-cols-2 gap-3">
        {projects.map(p => (
          <div key={p} className="p-3 bg-purple-50 rounded-xl text-sm font-bold text-purple-600 border border-purple-100">
            🚀 {p}
          </div>
        ))}
      </div>
    </div>
  );
}
render(<Portfolio />);`
    },
    tips: [
      "Follow the official React blog for updates.",
      "Join a community like Discord or Reddit to ask questions.",
      "Don't be afraid to read the source code of your favorite libraries."
    ]
  }
];
