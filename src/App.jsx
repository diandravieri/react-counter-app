import './App.css';
import { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-app">
      <h1>Counter: {count}</h1>
      <div className="buttons">
        <button onClick={handleIncrement}>Tambah</button>
        <button onClick={handleDecrement}>Kurang</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
