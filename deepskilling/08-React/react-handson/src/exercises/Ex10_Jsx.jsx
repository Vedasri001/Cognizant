import React from 'react';

// Exercise 10: JSX, React.createElement(), rendering JSX to the DOM

// Written with React.createElement (what JSX compiles down to):
const withCreateElement = React.createElement(
  'p',
  { className: 'note' },
  'This paragraph was built with React.createElement().'
);

// The same thing written as JSX (compiles to the call above via Babel/Vite):
function WithJsx() {
  return <p className="note">This paragraph was built with JSX.</p>;
}

export default function Ex10_Jsx() {
  return (
    <section>
      <h2>Ex10: JSX</h2>
      {withCreateElement}
      <WithJsx />
      <p>JSX is syntactic sugar: the compiler turns it into nested `React.createElement` calls.</p>
    </section>
  );
}
