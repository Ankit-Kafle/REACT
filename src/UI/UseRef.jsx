 
import React,{ useRef, useState } from 'react'

const UseRef = () => {

    const [value, setValue] = useState(0)

    const valueRef = useRef(0)
    console.log(valueRef)

    function Random(){
        setValue(Math.floor(Math.random()*999))
        console.log(value)
    }

    function RandomRef(){
        valueRef.current = Math.floor(Math.random()*999)
        console.log(valueRef.current)
    }
  return (
    <div>
        <button className='bg-green-100 text-black px-10 py-3 border-none' onClick={Random}> Random Num</button>
        <p className='w-32 p-4 bg-green-100 text-black px-2 py-4 text-5xl font-extrabold'>{value}</p>

        <button className='bg-amber-100 text-black px-10 py-3 border-none' onClick={RandomRef}> Random Ref Number</button>
        <p className='w-32  p-4 bg-amber-100 text-black px-2 py-4 text-5xl font-extrabold'>{valueRef.current}</p>
    </div>  
  )
}

export default UseRef
