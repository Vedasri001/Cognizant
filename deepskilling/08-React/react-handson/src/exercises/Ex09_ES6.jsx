// Exercise 9: ES6 features used throughout React (let, const, classes, arrow fns, destructuring)

class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a sound.`; }
}

class Dog extends Animal {
  speak() { return `${this.name} barks.`; } // overriding (polymorphism)
}

export default function Ex09_ES6() {
  let counter = 0; // let: block-scoped, reassignable
  counter += 1;

  const PI = 3.14159; // const: block-scoped, cannot be reassigned

  const user = { name: 'Vedasri', role: 'Developer' };
  const { name, role } = user; // destructuring

  const square = (x) => x * x; // arrow function

  const dog = new Dog('Rex');

  return (
    <section>
      <h2>Ex09: ES6 Fundamentals</h2>
      <ul>
        <li>let counter after increment: {counter}</li>
        <li>const PI: {PI}</li>
        <li>Destructured: {name} — {role}</li>
        <li>Arrow fn square(5): {square(5)}</li>
        <li>Class inheritance: {dog.speak()}</li>
      </ul>
    </section>
  );
}
