function OutputPane({ output }) {
    return (
      <div style={{ background: "#1e1e1e", color: "#fff", padding: "10px", height: "100%", overflowY: "auto", flex: 1 }}>
        <h3>Output:</h3>
        <pre>{output || "No output yet."}</pre>
      </div>
    );
  }
  
  export default OutputPane;
  

// function OutputPane({ output }) {
//     return (
//       <div style={{ whiteSpace: 'pre-wrap', background: '#1e1e1e', color: 'white', padding: '10px' }}>
//         <strong>Output:</strong>
//         <div>{output}</div>
//       </div>
//     );
//   }
  
//   export default OutputPane;
  