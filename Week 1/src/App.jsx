import { useState, useEffect } from "react";
import CodeEditor from "./components/CodeEditor";
import OutputPane from "./components/OutputPane";
import Toolbar from "./components/Toolbar";
import { runPythonCode } from "./utils/pyodideRunner";

function App() {
  const [code, setCode] = useState("print('Hello World!')");
  const [output, setOutput] = useState("");
  const [pyodideLoaded, setPyodideLoaded] = useState(false);

  useEffect(() => {
    const waitForPyodide = async () => {
      while (!window.loadPyodide) {
        await new Promise((res) => setTimeout(res, 100));
      }
      setPyodideLoaded(true);
    };
    waitForPyodide();
  }, []);

  const handleRun = async () => {
    if (!pyodideLoaded) {
      setOutput("Loading Python interpreter...");
      return;
    }
    const result = await runPythonCode(code);
    setOutput(result);
  };

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", background: "#121212" }}>
      <Toolbar onRunClick={handleRun} />
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ flex: 1 }}>
          <CodeEditor code={code} setCode={setCode} />
        </div>
        <div style={{ width: "40%" }}>
          <OutputPane output={output} />
        </div>
      </div>
    </div>
  );
}

export default App;


// import { useState } from "react";
// import CodeEditor from "./components/CodeEditor";
// import OutputPane from "./components/OutputPane";
// import Toolbar from "./components/Toolbar";
// import { runPythonCode } from "./utils/pyodideRunner";

// function App() {
//   const [code, setCode] = useState("print('Hello World!')");
//   const [output, setOutput] = useState("");
//   const [pyodideLoaded, setPyodideLoaded] = useState(false);
  
//   useEffect(() => {
//     const waitForPyodide = async () => {
//       while (!window.loadPyodide) {
//         await new Promise((res) => setTimeout(res, 100));
//       }
//       setPyodideLoaded(true);
//     };
//     waitForPyodide();
//   }, []);

//   const handleRun = async () => {
//     if (!pyodideLoaded) {
//       setOutput("Loading Python interpreter...");
//       return;
//     }
//     const result = await runPythonCode(code);
//     setOutput(result);
//   };

//   return (
//     <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", background: "#121212" }}>
//       <Toolbar onRunClick={handleRun} />
//       <div style={{ display: "flex", flex: 1 }}>
//         <div style={{ flex: 1 }}>
//         <OutputPane output={output} />
//           <CodeEditor code={code} setCode={setCode} />
//         </div>
//         <div style={{ width: "40%", background: "#1e1e1e", padding: "10px", color: "#fff", overflow: "auto" }}>
//           <h3>Output:</h3>
//           <pre>{output || "No output yet."}</pre>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
//   return (
//     // <div style={{ padding: "20px" }}>
//     <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: "#121212", padding: "10px", boxSizing: "border-box" }}>
//       <Toolbar onRunClick={handleRun} />
//       <div style={{ display: "flex", flex: 1, gap: "10px", marginTop: "10px" }}>
//       {/* <div style={{ display: "flex", gap: "2px" }}> */}
//         <div style={{ flex: 1 }}>
//           <CodeEditor code={code} setCode={setCode} />
//         </div>
//         <div style={{ flex: 1 }}>
//           <OutputPane output={output} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
