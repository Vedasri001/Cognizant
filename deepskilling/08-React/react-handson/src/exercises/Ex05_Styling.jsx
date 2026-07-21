import styles from './Ex05_Styling.module.css';

// Exercise 5: Styling a React component (CSS Module + inline style)
export default function Ex05_Styling() {
  const inlineStyle = { backgroundColor: '#f0f8ff', padding: '8px', marginTop: '8px' };

  return (
    <section>
      <h2>Ex05: Styling Components</h2>
      <div className={styles.card}>
        <p className={styles.title}>This card uses a CSS Module</p>
        <p>Class names are scoped locally, so they never clash with other components.</p>
      </div>
      <div style={inlineStyle}>This box uses an inline style object.</div>
    </section>
  );
}
