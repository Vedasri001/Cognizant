// Exercise 1: SPA, MPA, and how React works
export default function Ex01_SpaIntro() {
  return (
    <section>
      <h2>Ex01: Single Page Application (SPA) vs Multi Page Application (MPA)</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr><th>Aspect</th><th>SPA</th><th>MPA</th></tr>
        </thead>
        <tbody>
          <tr><td>Page reload</td><td>No full reload; DOM updates dynamically</td><td>Full page reload per navigation</td></tr>
          <tr><td>Speed after first load</td><td>Fast (only data fetched)</td><td>Slower (full HTML re-rendered)</td></tr>
          <tr><td>SEO</td><td>Harder without SSR</td><td>Easier by default</td></tr>
          <tr><td>Example</td><td>Gmail, React apps</td><td>Traditional server-rendered sites</td></tr>
        </tbody>
      </table>
      <p>
        React builds SPAs using a <strong>virtual DOM</strong>: it renders components to an
        in-memory tree, diffs it against the previous render, and patches only the changed
        real DOM nodes instead of reloading the whole page.
      </p>
    </section>
  );
}
