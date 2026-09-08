import { useState, useEffect,useRef } from "react";

function Counter({name}:any) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  function handleClick() {
    setCount(count + 1);
    countRef.current = countRef.current + 1;
  }

  return (
    <button onClick={handleClick}>
      {count} <br />
      {name}

    </button>
  );
}

export default Counter;