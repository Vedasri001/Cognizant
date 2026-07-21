import { useState } from 'react';

// Exercise 11: React events, event handlers, SyntheticEvent, camelCase naming convention
export default function Ex11_Events() {
  const [message, setMessage] = useState('Hover, click, or type below');

  const handleClick = (e) => {
    // e is a React SyntheticEvent - a cross-browser wrapper around the native event
    setMessage(`Button clicked! (event type: ${e.type})`);
  };

  const handleChange = (e) => {
    setMessage(`You typed: ${e.target.value}`);
  };

  return (
    <section>
      <h2>Ex11: Events</h2>
      <button onClick={handleClick}>Click me</button>
      <input onChange={handleChange} placeholder="Type something" />
      <p>{message}</p>
      <p>Note the camelCase handler props: onClick, onChange (not onclick/onchange as in plain HTML).</p>
    </section>
  );
}
