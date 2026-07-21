# 08 - React Hands-On Labs

A single Vite + React app covering all 19 ReactJS-HOL lab objectives, one page per
exercise, navigable from the home screen.

## Structure
```
react-handson/
├── src/
│   ├── exercises/
│   │   ├── Ex01_SpaIntro.jsx           (SPA vs MPA)
│   │   ├── Ex02_Components.jsx         (Class vs Function components)
│   │   ├── Ex04_Lifecycle.jsx          (componentDidMount / useEffect)
│   │   ├── Ex05_Styling.jsx (+ .module.css)   (CSS Modules + inline styles)
│   │   ├── Ex06_Router.jsx             (React Router + URL params)
│   │   ├── Ex07_Props.jsx              (Props + defaultProps)
│   │   ├── Ex08_State.jsx (+ .test.jsx)      (useState)
│   │   ├── Ex09_ES6.jsx                (let/const/classes/arrow fns/destructuring)
│   │   ├── Ex10_Jsx.jsx                (JSX vs React.createElement)
│   │   ├── Ex11_Events.jsx             (SyntheticEvent, event handlers)
│   │   ├── Ex12_ConditionalRendering.jsx
│   │   ├── Ex13_ListsAndKeys.jsx
│   │   ├── Ex14_Context.jsx            (Context API)
│   │   ├── Ex15_Forms.jsx              (Controlled forms + validation)
│   │   ├── Ex17_RestApi.jsx            (fetch from REST API)
│   │   ├── userService.js (+ .test.js) (Ex19: mocking a dependency)
│   ├── App.jsx / main.jsx
├── vite.config.js   (Vitest config: jsdom + Testing Library)
└── vitest.setup.js
```

## Run it
```bash
cd deepskilling/08-React/react-handson
npm install
npm run dev      # starts local dev server
```

## Verified output (captured in this environment)

### Production build
```
> react-handson@0.0.0 build
> vite build

vite v8.1.5 building client environment for production...
✓ 40 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-oFvaLM2W.css    1.91 kB │ gzip:  0.87 kB
dist/assets/index-BKqJ7YnI.js   242.83 kB │ gzip: 77.59 kB
✓ built in 1.68s
```

### Unit tests (Ex18/19 — Vitest + Testing Library, the modern equivalent of Jest/Enzyme)
```bash
npx vitest run
```
```
 ✓ src/exercises/Ex08_State.test.jsx (3 tests) 59ms
 ✓ src/exercises/userService.test.js (1 test) 6ms

 Test Files  2 passed (2)
      Tests  4 passed (4)
```

## Notes
- Exercises 2 and 3 (class components, function components) are combined into one file
  since they cover the same concept from two angles, per the lab doc.
- Exercises 15 and 16 (forms, form validation) are combined for the same reason.
- Ex18/19 use **Vitest + React Testing Library** rather than Jest/Enzyme — this is the
  standard modern replacement (Enzyme is unmaintained and doesn't support current React),
  but the concepts tested (rendering, interaction, isolation via mocking) map 1:1 to what
  the lab asks for.
