// Counter.js
import React, { useContext } from 'react';
import { MyContext } from './MyProvider';


function Counter() {
  const { count, incrementCount, decrementCount,text } = useContext(MyContext);

  return (
    <div>
       <h1>{text}</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default Counter;
