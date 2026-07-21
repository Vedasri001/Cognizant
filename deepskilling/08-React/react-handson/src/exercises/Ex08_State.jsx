import { useState } from 'react';

// Exercise 8: Using the React state object
export default function Ex08_State() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Ex08: State</h2>
      <p data-testid="count">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </section>
  );
}
