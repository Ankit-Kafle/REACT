import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Memo from '../UI/Memo';
import UseRef from '../UI/UseRef';
import { useCallback } from 'react';
const Optimization = () => {

  const[memo, setMemo] = useState(0);
  const[ref, setRef] = useState(0);
  const[count, setCount] = useState(0)

  const Navigate = useNavigate()

  const redirect = () =>{
    Navigate('/useref')
  }

  const redirectMemo = () => {
    Navigate("/memo");
  };

  function randomNum(){
    setCount( Math.floor(Math.random()* 999))
  }
  const randomMemo= useCallback(()=>{
    setMemo( Math.floor(Math.random()* 999))
  },[memo])
  const randomUseRef= useCallback(()=>{
    setCount( Math.floor(Math.random()* 999))
  },[ref])
  return (
    <div className='m-20'>
        <button className='bg-pink-200 text-black px-10 py-3 border-none' onClick={redirect}> UseRef</button>
        <button className=' bg-purple-200 text-black px-10 py-3 border-none' onClick={redirectMemo}> Memo</button>

        <button className=' bg-[#880596] text-white px-10 py-3 border-none' onClick={randomNum}> Random Number</button>

        <span className='bg-green-800 text-6xl font-extrabold text-white'>{count}</span>

        <Memo value={memo} update={randomMemo}></Memo>
        <UseRef values={ref} update={randomUseRef}></UseRef>

    </div>
  )
}

export default Optimization