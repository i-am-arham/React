import React, { useState, useEffect, useRef, createContext, useContext, useReducer, useMemo, useCallback } from 'react';

// =============================================================================
// REACT LEARNING APP - A Comprehensive Guide
// =============================================================================
// This file contains multiple components demonstrating different React concepts.
// Read from top to bottom - each section builds on the previous one.
// =============================================================================

// =============================================================================
// SECTION 1: BASIC COMPONENT (Functional Component)
// =============================================================================
// Components are just JavaScript functions that return JSX (HTML-like syntax).
// They must start with a Capital Letter so React knows it's a component.

function WelcomeMessage() {
  // This is JSX - it looks like HTML but it's JavaScript!
  // You can only return ONE parent element, so we wrap everything in a div
  // or use <>...</> (React Fragment) if you don't want extra DOM elements
  return (
    <div className="p-6 bg-blue-50 rounded-lg mb-6">
      <h1 className="text-2xl font-bold text-blue-800">Welcome to React! 🚀</h1>
      <p className="text-gray-700 mt-2">
        This is a <strong>functional component</strong> - the modern way to write React.
      </p>
    </div>
  );
}

// =============================================================================
// SECTION 2: PROPS (Passing Data to Components)
// =============================================================================
// Props = Properties. Think of them like function arguments.
// They allow you to pass data from parent to child components.
// Props are READ-ONLY - you cannot modify them in the child component!

function GreetingCard({ name, age, isAdmin }) {
  // We destructure props in the function parameters: { name, age, isAdmin }
  // instead of writing (props) and then props.name, props.age, etc.
  
  return (
    <div className="p-4 bg-white border-2 border-green-200 rounded-lg mb-4 shadow-sm">
      <h3 className="font-bold text-lg">Hello, {name}!</h3>
      <p>You are {age} years old.</p>
      {/* Conditional rendering: only show this if isAdmin is true */}
      {isAdmin && (
        <span className="inline-block mt-2 px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
          Admin User
        </span>
      )}
    </div>
  );
}

// =============================================================================
// SECTION 3: STATE (useState Hook)
// =============================================================================
// State = Data that changes over time and causes the UI to update.
// useState is a Hook - a special function that lets you use React features.
// When state changes, React automatically re-renders the component!

function Counter() {
  // useState returns an array: [currentValue, functionToUpdateValue]
  // count = current value (starts at 0)
  // setCount = function to update the value
  const [count, setCount] = useState(0);
  
  // You can have multiple state variables!
  const [message, setMessage] = useState('Click the buttons below');

  // Event handler function
  const handleIncrement = () => {
    // NEVER do: count = count + 1 (this won't work!)
    // ALWAYS use the setter function:
    setCount(count + 1);
    
    // You can also use the functional update form (better for async operations):
    // setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="p-6 bg-purple-50 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">useState Hook Demo</h2>
      <p className="mb-4 text-gray-600">{message}</p>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          -
        </button>
        
        {/* Display the state variable */}
        <span className="text-3xl font-bold w-12 text-center">{count}</span>
        
        <button 
          onClick={handleIncrement}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
      
      <button 
        onClick={() => setMessage(`Count is now: ${count}`)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded text-sm"
      >
        Update Message
      </button>
    </div>
  );
}

// =============================================================================
// SECTION 4: useEffect (Side Effects)
// =============================================================================
// useEffect handles side effects: API calls, subscriptions, manual DOM changes.
// It runs AFTER the component renders.
// Think of it as: "When this component does X, also do Y"

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // This code runs AFTER the component mounts (appears on screen)
    console.log('Clock component mounted!');
    
    // Set up an interval to update time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // CLEANUP FUNCTION: Runs when component unmounts (removed from screen)
    // or before the effect runs again
    return () => {
      console.log('Cleaning up interval...');
      clearInterval(intervalId);
    };
  }, []); // Empty array [] = run only once when component mounts

  // Effect with dependencies - runs when 'time' changes
  useEffect(() => {
    document.title = `Time: ${time.toLocaleTimeString()}`;
    // This updates the browser tab title!
  }, [time]); // [time] = run whenever 'time' changes

  return (
    <div className="p-6 bg-yellow-50 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-2">useEffect Demo (Clock)</h2>
      <p className="text-2xl font-mono">{time.toLocaleTimeString()}</p>
      <p className="text-sm text-gray-600 mt-2">
        Check your browser tab title - it updates with the time!
      </p>
    </div>
  );
}

// =============================================================================
// SECTION 5: FORMS & CONTROLLED COMPONENTS
// =============================================================================
// Controlled components = React controls the input value through state.
// Uncontrolled = DOM controls the value (traditional HTML way).
// Always use controlled components in React!

function UserForm() {
  // State object for form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    bio: '',
    newsletter: false
  });

  // Generic handler that works for all input types
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prevData => ({
      ...prevData, // Keep existing values
      [name]: type === 'checkbox' ? checked : value // Update changed field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Form submitted!\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Form Handling</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username} // Controlled by React state
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Bio:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            id="newsletter"
          />
          <label htmlFor="newsletter">Subscribe to newsletter</label>
        </div>

        <button 
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// =============================================================================
// SECTION 6: LISTS & KEYS
// =============================================================================
// When rendering lists, each item needs a unique "key" prop.
// Keys help React identify which items changed, added, or removed.
// NEVER use array index as key if the list can reorder or items can be deleted!

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build an app', done: false },
    { id: 3, text: 'Deploy to production', done: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (!inputValue.trim()) return;
    
    const newTodo = {
      id: Date.now(), // Simple unique ID (in real apps, use uuid library)
      text: inputValue,
      done: false
    };
    
    // Never mutate state directly! Create new array instead
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="p-6 bg-indigo-50 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Lists & Keys (Todo App)</h2>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          className="flex-1 p-2 border rounded"
          placeholder="Add new todo..."
        />
        <button 
          onClick={addTodo}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map(todo => (
          // KEY PROP IS CRUCIAL! Must be unique and stable
          <li 
            key={todo.id} 
            className="flex items-center justify-between p-3 bg-white rounded shadow-sm"
          >
            <span 
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer flex-1 ${
                todo.done ? 'line-through text-gray-400' : ''
              }`}
            >
              {todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 ml-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// =============================================================================
// SECTION 7: useReducer (Complex State Logic)
// =============================================================================
// useReducer is like useState but for complex state logic.
// Think of it as a state machine: (state, action) => newState
// Great for forms, wizards, or when next state depends on previous state

// Action types - constants to avoid typos
const ACTIONS = {
  ADD: 'add',
  REMOVE: 'remove',
  CLEAR: 'clear'
};

// Reducer function - pure function that returns new state
function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload];
    case ACTIONS.REMOVE:
      return state.filter(item => item.id !== action.payload);
    case ACTIONS.CLEAR:
      return [];
    default:
      return state;
  }
}

function ShoppingCart() {
  // useReducer returns [state, dispatch]
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [itemName, setItemName] = useState('');

  const addItem = () => {
    if (!itemName.trim()) return;
    
    const newItem = {
      id: Date.now(),
      name: itemName,
      price: Math.floor(Math.random() * 100) // Random price for demo
    };
    
    // Dispatch an action object with type and payload
    dispatch({ type: ACTIONS.ADD, payload: newItem });
    setItemName('');
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 bg-orange-50 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">useReducer Demo (Shopping Cart)</h2>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Item name..."
        />
        <button 
          onClick={addItem}
          className="px-4 py-2 bg-orange-500 text-white rounded"
        >
          Add to Cart
        </button>
      </div>

      <ul className="space-y-2 mb-4">
        {cart.map(item => (
          <li key={item.id} className="flex justify-between p-2 bg-white rounded">
            <span>{item.name} - ${item.price}</span>
            <button 
              onClick={() => dispatch({ type: ACTIONS.REMOVE, payload: item.id })}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center pt-4 border-t">
        <span className="font-bold">Total: ${total}</span>
        <button 
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

// =============================================================================
// SECTION 8: useRef (Accessing DOM & Persisting Values)
// =============================================================================
// useRef has two main uses:
// 1. Access DOM elements directly (like document.getElementById)
// 2. Store values that persist between renders but don't cause re-render when changed

function FocusInput() {
  const inputRef = useRef(null); // Starts as null, will hold DOM element
  const renderCount = useRef(0); // Persists value between renders
  
  // Increment render counter (this won't cause infinite loop because
  // changing ref doesn't trigger re-render)
  renderCount.current++;

  const focusInput = () => {
    // Access the DOM element directly
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = '#e0f2fe';
  };

  return (
    <div className="p-6 bg-pink-50 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">useRef Demo</h2>
      
      <div className="flex gap-2 mb-4">
        <input
          ref={inputRef} // Connect ref to this input element
          type="text"
          className="flex-1 p-2 border rounded"
          placeholder="Click button to focus me..."
        />
        <button 
          onClick={focusInput}
          className="px-4 py-2 bg-pink-500 text-white rounded"
        >
          Focus Input
        </button>
      </div>
      
      <p className="text-sm text-gray-600">
        This component has rendered {renderCount.current} times.
        (Notice: updating this counter doesn't cause re-render!)
      </p>
    </div>
  );
}

// =============================================================================
// SECTION 9: useMemo & useCallback (Performance Optimization)
// =============================================================================
// useMemo = memoize expensive calculations (cache results)
// useCallback = memoize functions (cache function references)
// Only use when you have performance issues! Premature optimization is bad.

function ExpensiveCalculation() {
  const [number, setNumber] = useState(5);
  const [darkMode, setDarkMode] = useState(false);

  // Without useMemo: this runs on EVERY render, even when only darkMode changes
  // With useMemo: only runs when 'number' changes
  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]); // Only recalculate when number changes

  // useCallback prevents function recreation on every render
  // Useful when passing functions to child components (prevents unnecessary re-renders)
  const resetNumber = useCallback(() => {
    setNumber(1);
  }, []); // Empty deps = never recreate

  return (
    <div className={`p-6 rounded-lg mb-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-teal-50'}`}>
      <h2 className="text-xl font-bold mb-4">useMemo & useCallback Demo</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Number:</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            className="p-2 border rounded text-black"
          />
        </div>
        
        <p className="text-lg">
          {number}! = <span className="font-mono font-bold">{factorial}</span>
        </p>

        <div className="flex gap-4">
          <button 
            onClick={resetNumber}
            className="px-4 py-2 bg-teal-500 text-white rounded"
          >
            Reset to 1
          </button>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-600 text-white rounded"
          >
            Toggle Theme
          </button>
        </div>
        
        <p className="text-xs opacity-70">
          Open console to see when calculation runs. 
          Notice it doesn't recalculate when you toggle theme!
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// SECTION 10: CONTEXT API (Global State Management)
// =============================================================================
// Context allows passing data through the component tree without prop drilling.
// Create context → Provide context → Consume context
// Good for: themes, user auth, language settings

// 1. CREATE CONTEXT
const ThemeContext = createContext();

// 2. PROVIDER COMPONENT (wraps app and provides the context value)
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Value object contains everything we want to share
  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. CONSUMER COMPONENT (uses the context)
function ThemedCard() {
  // useContext hook accesses the context value
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <div className={`p-6 rounded-lg mb-6 transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white border-2'
    }`}>
      <h2 className="text-xl font-bold mb-4">Context API Demo</h2>
      <p className="mb-4">Current theme: <strong>{theme}</strong></p>
      
      <button 
        onClick={toggleTheme}
        className={`px-4 py-2 rounded ${
          isDark ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-white'
        }`}
      >
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

// =============================================================================
// SECTION 11: CUSTOM HOOKS (Reusable Logic)
// =============================================================================
// Custom hooks extract component logic into reusable functions.
// They start with "use" and can call other hooks.
// This is the most powerful pattern for sharing logic!

// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        
        if (!cancelled) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchData();

    // Cleanup: prevent setting state on unmounted component
    return () => { cancelled = true; };
  }, [url]); // Re-run when URL changes

  return { data, loading, error };
}

// Custom hook for localStorage
function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or use default
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Update localStorage when state changes
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// Component using custom hooks
function UserProfile() {
  // Using our custom localStorage hook
  const [username, setUsername] = useLocalStorage('username', 'Guest');
  
  // Using our custom fetch hook (fake API for demo)
  const { data: user, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

  return (
    <div className="p-6 bg-cyan-50 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Custom Hooks Demo</h2>
      
      <div className="mb-4">
        <label className="block text-sm mb-1">Username (saved to localStorage):</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <p className="text-xs text-gray-500 mt-1">
          Refresh the page - your name persists!
        </p>
      </div>

      <div className="mt-4 p-4 bg-white rounded">
        <h3 className="font-bold mb-2">Fetched User Data:</h3>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {user && (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.address?.city}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// =============================================================================
// SECTION 12: COMPOSITION (Children Prop)
// =============================================================================
// The children prop allows components to wrap other components/content.
// This creates flexible, reusable layout components.

function Card({ title, children, footer }) {
  // children = whatever is between <Card> and </Card> tags
  return (
    <div className="border rounded-lg overflow-hidden mb-4 shadow-sm">
      <div className="bg-gray-100 p-3 border-b">
        <h3 className="font-bold">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
      {footer && (
        <div className="bg-gray-50 p-3 border-t text-sm text-gray-600">
          {footer}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// MAIN APP COMPONENT (Bringing it all together)
// =============================================================================

export default function ReactLearningApp() {
  return (
    // Wrap with ThemeProvider so all children can access theme context
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          
          {/* Header */}
          <WelcomeMessage />
          
          {/* Props Demo */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-700 mb-3 border-b pb-2">
              1. Props (Passing Data)
            </h2>
            <GreetingCard name="Alice" age={25} isAdmin={true} />
            <GreetingCard name="Bob" age={30} isAdmin={false} />
          </section>

          {/* State Demo */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-700 mb-3 border-b pb-2">
              2. useState (Component State)
            </h2>
            <Counter />
          </section>

          {/* Effect Demo */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-700 mb-3 border-b pb-2">
              3. useEffect (Side Effects)
            </h2>
            <Clock />
          </section>

          {/* Form Demo */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-700 mb-3 border-b pb-2">
              4. Forms & Controlled Components
            </h2>
            <UserForm />
          </section>

          {/* Lists Demo */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-700 mb-3 border-b pb-2">
              5. Lists & Keys
            </h2>
            <TodoList />
          </section>

          {/* Reducer Demo */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-700 mb-3 border-b pb-2">
              6. useReducer (Complex State)
            </h2>
            <ShoppingCart />
          </section>

          {/* Ref Demo */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-700 mb-3 border-b pb-2">
              7. useRef (DOM Access)
            </h2>
            <FocusInput />
          </section>

          {/* Memo/Callback Demo */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-700 mb-3 border-b pb-2">
              8. useMemo & useCallback (Optimization)
            </h2>
            <ExpensiveCalculation />
          </section>

          {/* Context Demo */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-700 mb-3 border-b pb-2">
              9. Context API (Global State)
            </h2>
            <ThemedCard />
          </section>

          {/* Custom Hooks Demo */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-700 mb-3 border-b pb-2">
              10. Custom Hooks
            </h2>
            <UserProfile />
          </section>

          {/* Composition Demo */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-700 mb-3 border-b pb-2">
              11. Composition (Children Prop)
            </h2>
            <Card 
              title="Reusable Card Component" 
              footer="This is the footer area"
            >
              <p>This content is passed as children!</p>
              <p className="mt-2 text-sm text-gray-600">
                You can put any JSX here: components, text, lists, etc.
              </p>
            </Card>
          </section>

          {/* Summary */}
          <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
            <h2 className="text-xl font-bold mb-3">🎓 Key Takeaways</h2>
            <ul className="space-y-2 text-sm">
              <li>• Components are functions that return JSX</li>
              <li>• Props pass data down (parent → child)</li>
              <li>• State manages data that changes over time</li>
              <li>• useEffect handles side effects (API calls, subscriptions)</li>
              <li>• Keys are crucial for list performance</li>
              <li>• Never mutate state directly - always create new objects/arrays</li>
              <li>• Custom hooks extract reusable logic</li>
              <li>• Context avoids prop drilling for global data</li>
            </ul>
          </div>

        </div>
      </div>
    </ThemeProvider>
  );
}