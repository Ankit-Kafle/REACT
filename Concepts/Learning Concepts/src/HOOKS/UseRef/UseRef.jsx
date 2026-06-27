import { useRef,useState,useEffect} from "react";
import './useRef.css'
import React from 'react'

const UseRef = () => {

//PART-1
//state variable get changes than it makes re render to our Ui
const [count,setCount]=useState(0);
// let val=1;
let val= useRef(0); //now this val become an object whose initial value is zero which is present in the current field of this object


//part-2
let btnRef = useRef();


//PART-1
function handleIncrement(){
    // val= val+1;
    val.current= val.current+1;  // now this var became a unique variable which doesnot get render even this component (i.e UseRef.jsx) is render and holds a persistant value  
    console.log("value of val:",val.current)
    setCount(count+1);
}


//it runs on every render
useEffect(()=>{
    console.log("maa feri render vhako xu")
})

//part-2
function changeColor(){
btnRef.current.style.backgroundColor ="red";
}


//PART_3
// PART-3
const [time, setTime] = useState(0);
const timerRef = useRef(null);

function startTimer() {
  if (timerRef.current !== null) return;

  timerRef.current = setInterval(() => {
    setTime((time) => time + 1);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerRef.current);
  timerRef.current = null;
}

function resetTimer() {
  stopTimer();
  setTime(0);
}

  return (
    <>
    <div>
      <button
      ref={btnRef}
      onClick={handleIncrement}>Increment</button>
      <br/>


<br/>
<button onClick={changeColor}>
Change Color OF 1st button
</button>
<br/>
<br/>
      <div>
        Count: {count}
      </div>
    </div>

<div>
    <h1>StopWatch: {time} Seconds</h1>

    <button onClick={startTimer}>Start</button> <br/><br/>
    <button onClick={stopTimer}>Stop</button> <br/><br/>
    <button onClick={resetTimer}>Reset</button> <br/><br/>
</div>


</>
  )
}

export default UseRef
