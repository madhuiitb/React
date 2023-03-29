import { useEffect, useRef, useState } from "react";
import "./UsePreviousHook";

const usePrevious = (value) => {
  const countRef = useRef(null);
  useEffect(() => {
    countRef.current = value;
  }, [value]);
  return countRef.current;
};

const UsePreviousHook = () => {
  const [count, setCount] = useState(0);
  const previousValue = usePrevious(count);

  const onCounterClick = () => {
    setCount(count + 1);
  };

  const onClear = () => {
    setCount(0);
  };

  return (
    <div>
      <h1> Count: {count}</h1>
      <h3> Previous Count: {previousValue} </h3>
      <button className="counter" onClick={onCounterClick}>
        Counter
      </button>
      <button className="clear" onClick={onClear}>
        Clear
      </button>
    </div>
  );
};
export default UsePreviousHook;
