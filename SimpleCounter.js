import { useEffect, useState } from "react";

const Counter = (props) =>{
  const [count, setCount] = useState(0);

   const onClickRun = ()=>{
    setCount(count+1);
  }
  
  const OnClickClear = ()=>{
    setCount(0);
  }

  return(
    <>
    <button onClick={onClickRun}>Run</button>
    {count}
    <button onClick={OnClickClear}>Clear</button>
    </>
  );
}

export default Counter;
