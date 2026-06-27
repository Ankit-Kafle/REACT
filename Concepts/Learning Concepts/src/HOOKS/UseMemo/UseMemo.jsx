//The useMemo hook is a built-in React Hook that caches (memoizes) the result of a calculation between component re-renders.It allows your application to skip expensive computations on subsequent renders if its input dependencies have not changed
//const cachedValue = useMemo(() => calculateValue(), [dependencies]);
//Calculate Function: A pure function with no arguments that returns the value you want to cache.Dependency Array: A list of all reactive values (props, state, or variables inside the component) used inside the calculation function


import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';



const UseMemo = () => {
    const [count,setCount] =useState(0);
    const [input,setInput] =useState(0);

function expensiveTask(num){
    console.log("Inside Expensive task");
    for(let i=0; i<=1000000000; i++){}
    return num*2;
}

let doubleValue = useMemo(()=>expensiveTask(input),[input]); 

  return (

    <>
    <div>
        <br/>
      <button onClick={()=> setCount(count+1)}  
         style={{
    padding: "12px 24px",margin: "10px",fontSize: "16px",fontWeight: "bold",border: "none",borderRadius: "8px",backgroundColor: "gray",color: "white",cursor: "pointer"
  }}>Increment</button> <br/><br/>
      <button        style={{
    padding: "12px 24px",margin: "10px",fontSize: "16px",fontWeight: "bold",border: "none",borderRadius: "8px",backgroundColor: "#46e5a8",color: "white",cursor: "pointer"
  }}>Count: {count}</button> <br/><br/>
      <button        style={{
    padding: "12px 24px",margin: "10px",fontSize: "16px",fontWeight: "bold",border: "none",borderRadius: "8px",backgroundColor: "#bacf1a",color: "white",cursor: "pointer"
  }}>Double: {doubleValue}</button> <br/><br/>
    </div>

<input
type='number'
placeholder='enter number'
value={input}
onChange={(e) => setInput(e.target.value)}


/>
</>
  )


}

export default UseMemo
