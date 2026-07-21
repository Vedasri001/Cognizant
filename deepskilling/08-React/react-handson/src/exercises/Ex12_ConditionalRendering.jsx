import { useState } from 'react';

// Exercise 12: Conditional rendering, element variables, preventing a component from rendering
function LoginMessage({ isLoggedIn }) {
  if (!isLoggedIn) return null; // prevents rendering entirely
  return <p>Welcome back!</p>;
}

export default function Ex12_ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Element variable
  let statusMessage;
  if (isLoggedIn) {
    statusMessage = <span style={{ color: 'green' }}>Online</span>;
  } else {
    statusMessage = <span style={{ color: 'gray' }}>Offline</span>;
  }

  return (
    <section>
      <h2>Ex12: Conditional Rendering</h2>
      <p>Status: {statusMessage}</p>
      {isLoggedIn && <p>Ternary/&& example: you are logged in.</p>}
      <LoginMessage isLoggedIn={isLoggedIn} />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </section>
  );
}
