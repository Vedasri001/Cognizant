import { Routes, Route, Link, useParams } from 'react-router-dom';

// Exercise 6: React Router - nested routes + URL params
function ProductDetail() {
  const { id } = useParams(); // parameter passing via URL
  return <p>Showing details for product ID: {id}</p>;
}

function ProductList() {
  return (
    <ul>
      <li><Link to="1">Product 1</Link></li>
      <li><Link to="2">Product 2</Link></li>
    </ul>
  );
}

export default function Ex06_Router() {
  return (
    <section>
      <h2>Ex06: React Router</h2>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path=":id" element={<ProductDetail />} />
      </Routes>
    </section>
  );
}
