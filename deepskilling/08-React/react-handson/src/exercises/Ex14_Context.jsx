import { createContext, useContext, useState } from 'react';

// Exercise 14: React Context API - avoids prop-drilling
const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext); // consumed directly, no props passed down
  return (
    <button style={{
      background: theme === 'dark' ? '#333' : '#eee',
      color: theme === 'dark' ? '#fff' : '#000',
    }}>
      Current theme: {theme}
    </button>
  );
}

export default function Ex14_Context() {
  const [theme, setTheme] = useState('light');

  return (
    <section>
      <h2>Ex14: Context API</h2>
      <ThemeContext.Provider value={theme}>
        <ThemedButton />
      </ThemeContext.Provider>
      <br />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle theme
      </button>
    </section>
  );
}
