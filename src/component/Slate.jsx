import { useState } from "react";

function State() {
  let [state, setState] = useState();

  const printStateValue = () => {
    alert(state);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h2>Update State with Input Data</h2>
      

      <input
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={printStateValue}>Submit</button>
    </div>
  );
}

export default State;