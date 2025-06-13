function Toolbar({ onRunClick }) {
    // const style = {
    //   background: "#1f1f1f",
    //   padding: "10px",
    //   display: "flex",
    //   gap: "10px",
    // };
    const buttonStyle = {
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    };
  
    return (
      <div style={{ display: "flex", gap: "10px", padding: "10px", backgroundColor: "#1f1f1f" }}>
        <button style={buttonStyle} onClick={onRunClick}>Run</button>
        <button style={buttonStyle} disabled>Debug</button>
        <button style={buttonStyle} disabled>Test</button>
        <button style={buttonStyle} disabled>Explain</button>
      </div>
    );
  }
  
  export default Toolbar;
  

// function Toolbar({ onRunClick }) {
//     return (
//       <div style={{ marginBottom: '10px' }}>
//         <button onClick={onRunClick}>Run</button>
//         <button disabled>Debug</button>
//         <button disabled>Test</button>
//         <button disabled>Explain</button>
//       </div>
//     );
//   }
  
//   export default Toolbar;
  