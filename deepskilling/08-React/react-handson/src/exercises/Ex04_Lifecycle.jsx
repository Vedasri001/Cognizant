import { Component, useEffect, useState } from 'react';

// Exercise 4: Component lifecycle hook methods

// Class-based lifecycle: componentDidMount / componentDidUpdate / componentWillUnmount
class ClockClass extends Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <p>Class clock (componentDidMount/WillUnmount): {this.state.time}</p>;
  }
}

// Function-based equivalent using useEffect (mount + cleanup)
function ClockFunction() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(id); // cleanup === componentWillUnmount
  }, []); // [] === componentDidMount (runs once)

  return <p>Function clock (useEffect): {time}</p>;
}

export default function Ex04_Lifecycle() {
  return (
    <section>
      <h2>Ex04: Component Lifecycle</h2>
      <ClockClass />
      <ClockFunction />
      <p>Render sequence: constructor → render → componentDidMount → (updates) → componentWillUnmount.</p>
    </section>
  );
}
