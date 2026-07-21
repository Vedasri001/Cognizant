import { Component } from 'react';

// Exercise 2 & 3: Class Component vs Function Component

// Class component
class GreetingClass extends Component {
  render() {
    return <p>Hello, {this.props.name} (from a class component)</p>;
  }
}

// Function component (equivalent behavior)
function GreetingFunction({ name }) {
  return <p>Hello, {name} (from a function component)</p>;
}

export default function Ex02_Components() {
  return (
    <section>
      <h2>Ex02/03: Class Components vs Function Components</h2>
      <GreetingClass name="Vedasri" />
      <GreetingFunction name="Vedasri" />
      <p>
        Both render the same output. Function components are simpler (no <code>this</code>,
        no constructor) and, with Hooks, can do everything class components can — which is
        why modern React code favors them.
      </p>
    </section>
  );
}
