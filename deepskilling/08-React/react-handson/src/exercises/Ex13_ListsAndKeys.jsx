// Exercise 13: Rendering multiple components, list component, keys
const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Mouse' },
  { id: 3, name: 'Keyboard' },
];

function ProductItem({ name }) {
  return <li>{name}</li>;
}

function ProductList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        // key must be a stable, unique identifier - NOT the array index when order can change
        <ProductItem key={item.id} name={item.name} />
      ))}
    </ul>
  );
}

export default function Ex13_ListsAndKeys() {
  return (
    <section>
      <h2>Ex13: Lists and Keys</h2>
      <ProductList items={products} />
      <p>Keys help React identify which items changed, were added, or were removed between renders.</p>
    </section>
  );
}
