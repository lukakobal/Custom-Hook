import { useState, useEffect } from "react";
import "./styles.css";

function useCounter(initalValue = 0) {
  const [count, setCount] = useState(initalValue);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(initalValue);
  };

  return { count, increment, decrement, reset };
}

export default function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="container">
      <h1>Custom Hook - useCounter</h1>

      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
