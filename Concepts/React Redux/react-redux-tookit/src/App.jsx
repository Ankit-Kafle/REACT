
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment , incrementByAmount, reset} from './features/Counter/counterSlice'
import { useState } from 'react'

function App() {

  const [amount,setAmount]=useState(0);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrementClick() {
    dispatch(increment())
  }

  function handleDecrementClick() {
    dispatch(decrement())
  }

  function handleResetClick() {
    dispatch(reset())
  }

function handleIncAmountClick(){
dispatch(incrementByAmount(amount))
}

  return (
    <>
      <div className='container'>
        <button onClick={handleIncrementClick}>+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br/>
        <button onClick={handleResetClick}>Reset</button>
        <br/>


        <button onClick={handleIncAmountClick}>Inc by Amount</button>
<br/>
        <input type='Number' value={amount} placeholder='Enter Amount' onChange={(e)=>setAmount(e.target.value)}></input>
      </div>
    </>
  )
}

export default App
