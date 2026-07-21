// Exercise 7: Props, Default Props, and Props vs State
function UserCard({ name, role }) {
  return <p>{name} — {role}</p>;
}
UserCard.defaultProps = { role: 'Member' }; // used when `role` isn't passed

export default function Ex07_Props() {
  return (
    <section>
      <h2>Ex07: Props</h2>
      <UserCard name="Vedasri" role="Admin" />
      <UserCard name="Guest User" /> {/* falls back to default role */}
      <p>
        Props are read-only data passed from a parent to a child (immutable inside the
        child). State is data owned and managed inside a component that can change over
        time and trigger a re-render.
      </p>
    </section>
  );
}
