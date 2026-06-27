import { useEffect, useState } from 'react'


const UseEffect = () => {
const [count,setCount]=useState(0);
const [total,setTotal]=useState(0);


//first-> side-effect function
//Second-> clean-up function
//third->comma seperated dependency list


// You can control when the side effects run by specifying dependencies in the array:

// No dependency array: The effect runs after every render. useEffect(() => { // Runs on every render });
// useEffect(()=>{
//   alert("i will run on each render");
// })

// Empty dependency array: The effect runs only once after the initial render. useEffect(() => { // Runs only on the first render }, []);
// useEffect(()=>{
//   alert("i will run on only 1st render");
//  },[])


// Specific dependencies: The effect runs when any of the specified dependencies change. useEffect(() => { // Runs on the first render and whenever 'prop' or 'state' changes }, [prop, state]);
// useEffect(()=>{
//   alert("i will run every time when count is updated");
//  },[count])

//Multiple dependencies
// useEffect(()=>{
//   alert("i will run every time when count/total is updated");
//  },[count,total])


//VARIATION-5 MOUNTED AND UNMOUNTED CASE OR CLEAN-UP
// useEffect(()=>{
//   alert("Count is updated")
//   return () =>{
//     alert("Count is unmounted from UI")
//   }
// },[count])



function handleClick(){
    setCount(count+1);
   
}

function handleClickTotal(){
    
    setTotal(total+1);
}




useEffect(()=>{},)

  return (
    <>    <div>
     <button onClick={handleClick}   style={{
    padding: "12px 24px",margin: "10px",fontSize: "16px",fontWeight: "bold",border: "none",borderRadius: "8px",backgroundColor: "#cc13d6",color: "white",cursor: "pointer"
  }}>update Count</button>
  <div style={{ fontSize: "20px", fontWeight: "400" ,"backgroundColor":"purple"}}>The Count is : {count}</div>
    </div>

    <div>
     <button onClick={handleClickTotal}   style={{
    padding: "12px 24px",margin: "10px",fontSize: "16px",fontWeight: "bold",border: "none",borderRadius: "8px",backgroundColor: "#cc13d6",color: "white",cursor: "pointer"
  }}>update Total</button>
  <div style={{ fontSize: "20px", fontWeight: "400" ,"backgroundColor":"purple"}}>Total is : {total}</div>
    </div>



    </>

  )
}

export default UseEffect


// Understanding useEffect in React JS
// The useEffect hook in React JS is a powerful tool that allows you to perform side effects in your functional components. Side effects can include tasks like fetching data, directly updating the DOM, and setting up timers. The useEffect hook is designed to handle these tasks efficiently and can be seen as a way to mimic the lifecycle methods of class-based components in functional components.

// Basic Usage

// The useEffect hook takes two arguments: a function (which contains the side effect logic) and an optional dependency array. The syntax is as follows:

// useEffect(() => {
// // Your side effect logic here
// }, [dependencies]);