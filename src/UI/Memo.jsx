import React,{memo} from 'react'

const Memo =memo(({value, update}) => {

    console.log("Memo Component Rendered...")

  return (
    <div className='bg-yellow-100 m-10 p-5'>
        Memo Component
        this is memo Component
        <br/>
        <button className='bg-pink-200 text-black px-10 py-3 border-none' onClick={update}> RAndom num from memo</button>
    
    <span className='bg-green-200 text-black text-5xl font-extrabold'>{value}</span>
    </div>
  )
}
)
export default Memo