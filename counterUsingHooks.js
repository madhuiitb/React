import {useEffect, useRef, useState} from 'react';

import "./Counter.scss"
const Counter = () => {
  
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(0);
  const timerRef = useRef(null);

  useEffect(()=>{
    if(start){
      timerRef.current = setTimeout(()=>{
        setCount(count + 1);
      },1000);
    }
    ()=>{clearTimeout(timerRef.current)}
  },[count, start]);
  
  const onStart = ()=>{
    setStart(true);
  }
  
  const onStop = ()=>{
    clearTimeout(timerRef.current);
    setStart(false);
    console.log(timerRef.current)
  }
  
  const onClear = () =>{
    setCount(0);
    clearTimeout(timerRef.current);
    setStart(false);
  }
  
  return(
    <div className="button">
      <h1 className='counter'> Counter: {count}</h1>
      <button className="start" onClick={onStart}> Start </button>
      <button className="pause" onClick={onStop}> Pause </button>
      <button className="clear" onClick={onClear}> Clear </button>
    </div>
  );
}

export default Counter;
