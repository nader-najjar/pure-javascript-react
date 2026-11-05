import { useState } from 'react';
import type { ReactElement } from 'react';
import './App.css';

export function App(): ReactElement {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Pure React</h1>
      <p>React + TypeScript + Vite</p>
      <p role="status">{`Count: ${String(count)}`}</p>
      <button type="button" onClick={() => { setCount((current) => current + 1); }}>Increment</button>
      <button type="button" disabled={count === 0} onClick={() => { setCount(0); }}>Reset</button>
    </main>
  );
}
