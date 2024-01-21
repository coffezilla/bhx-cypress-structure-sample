import { useState } from "react";
import Contador from "./components/Contador/Contador.jsx";
import Placeholder from "./components/Placeholder/Placeholder.jsx";

function App() {
  const [votes, setVotes] = useState(1);

  return (
    <>
      <div>
        <h1>test</h1>
        <Contador />
        <Placeholder title="Footer" />
      </div>
    </>
  );
}

export default App;
