// The useCallback hook in React is used to memoize a function so that its reference remains the same between re-renders unless its dependencies change. This helps prevent unnecessary re-renders of child components, especially when they are wrapped with React.memo.

// It is particularly useful when:

// Passing functions as props to memoized child components.

// Avoiding function re-creations inside useEffect or event handlers.

// Ensuring stable function references for performance optimization.

// Basic Syntax:

// const memoizedFn = useCallback(
// () => {
// // function logic
// },
// [dependencies]
// );
// Copy
// callback: The function to memoize.

// dependencies: Values that, when changed, cause the function to be recreated.



import './UseCallback.css'
import React, { useCallback } from 'react'
import { useState } from 'react';
import ChildComponent from './ChildComponent';
const UseCallback = () => {
const [count,setCount]=useState(0);


//this function is recreating when the component is getting re render due to so it is making child component also re-render so we wanted it to freeze this function in its old refrence 
// function handleClick(){
//     setCount(count+1);
// }

const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
}, []);


  return (
    <div className="use-callback-container">
      <div className="use-callback-card">
        <h1>Count: {count}</h1>

        <button onClick={handleClick}>Increment</button>
        <br /><br />

        <ChildComponent
          buttonName="Click me "
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}

export default UseCallback
