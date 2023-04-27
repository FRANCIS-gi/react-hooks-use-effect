import React, { useState, useEffect } from "react";

function App() {

  const [ count, setCount] =useState(0);

  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  return (
  <button onClick= {() => setCount ((count) => count +1)}>
  Clicked {count}times
  </button>
  )
}

export default App;
