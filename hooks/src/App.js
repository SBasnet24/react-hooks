import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <h1>{count}</h1>
    </div>
  );
};

export default App;
