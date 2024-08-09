import './App.css';
import { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
      setDone(false);
    } else {
      setDone(true);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setDone(false);
    } else {
      setDone(true);
    }
  };

  const handleReset = () => {
    if (done) {
      setCount(0);
      setDone(false);
    }
  };

  return (
    <div className="counter-app">
      <h1>Counter: {count}</h1>
      {done && <h2>Done</h2>}
      <div className="buttons">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset} disabled={!done}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
