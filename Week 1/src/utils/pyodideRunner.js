// let pyodide = null;

// export async function loadPyodideAndPackages() {
//   if (!pyodide) {
//     pyodide = await window.loadPyodide({
//         indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/",
//     // const pyodideModule = await import("pyodide");
//     // pyodide = await pyodideModule.loadPyodide();
//     });
//   }
//   return pyodide;
// }

// export async function runPythonCode(code) {
  
//   try {
//     const pyodide = await loadPyodideAndPackages();
//     return await pyodide.runPythonAsync(code);
//   } catch (error) {
//     return error.toString();
//   }
// }
let pyodide;

export async function runPythonCode(code) {
  if (!pyodide) {
    pyodide = await window.loadPyodide();
  }
  try {
    const result = await pyodide.runPythonAsync(code);
    return result?.toString() || "Code ran successfully.";
  } catch (err) {
    return `Error: ${err}`;
  }
}
