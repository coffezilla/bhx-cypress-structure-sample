import { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(() => count + 1);
  };
  return (
    <div>
      <button type="button" onClick={handleCount} data-testid="button-count">
        Clickme <span data-testid="count-number">{count}</span>
      </button>
    </div>
  );
};

export default Contador;
