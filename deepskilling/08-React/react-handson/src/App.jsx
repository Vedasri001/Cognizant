import { Link, Route, Routes } from 'react-router-dom';
import Ex01_SpaIntro from './exercises/Ex01_SpaIntro';
import Ex02_Components from './exercises/Ex02_Components';
import Ex04_Lifecycle from './exercises/Ex04_Lifecycle';
import Ex05_Styling from './exercises/Ex05_Styling';
import Ex06_Router from './exercises/Ex06_Router';
import Ex07_Props from './exercises/Ex07_Props';
import Ex08_State from './exercises/Ex08_State';
import Ex09_ES6 from './exercises/Ex09_ES6';
import Ex10_Jsx from './exercises/Ex10_Jsx';
import Ex11_Events from './exercises/Ex11_Events';
import Ex12_ConditionalRendering from './exercises/Ex12_ConditionalRendering';
import Ex13_ListsAndKeys from './exercises/Ex13_ListsAndKeys';
import Ex14_Context from './exercises/Ex14_Context';
import Ex15_Forms from './exercises/Ex15_Forms';
import Ex17_RestApi from './exercises/Ex17_RestApi';

const exercises = [
  ['ex01', 'Ex01: SPA vs MPA', Ex01_SpaIntro],
  ['ex02', 'Ex02/03: Components', Ex02_Components],
  ['ex04', 'Ex04: Lifecycle', Ex04_Lifecycle],
  ['ex05', 'Ex05: Styling', Ex05_Styling],
  ['ex06', 'Ex06: Router', Ex06_Router],
  ['ex07', 'Ex07: Props', Ex07_Props],
  ['ex08', 'Ex08: State', Ex08_State],
  ['ex09', 'Ex09: ES6', Ex09_ES6],
  ['ex10', 'Ex10: JSX', Ex10_Jsx],
  ['ex11', 'Ex11: Events', Ex11_Events],
  ['ex12', 'Ex12: Conditional Rendering', Ex12_ConditionalRendering],
  ['ex13', 'Ex13: Lists & Keys', Ex13_ListsAndKeys],
  ['ex14', 'Ex14: Context API', Ex14_Context],
  ['ex15', 'Ex15/16: Forms & Validation', Ex15_Forms],
  ['ex17', 'Ex17: REST API', Ex17_RestApi],
];

function Home() {
  return (
    <div>
      <h1>Cognizant DN 5.0 - React Hands-On Labs</h1>
      <ul>
        {exercises.map(([path, label]) => (
          <li key={path}><Link to={path}>{label}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {exercises.map(([path, , Component]) => (
          <Route key={path} path={`/${path}/*`} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
}
