// MyProvider.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

export function MyProvider({ children }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };
  const text="hi";
  return (
    <MyContext.Provider value={{ count, incrementCount, decrementCount,text }}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext }; // Export the context
