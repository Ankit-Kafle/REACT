import React from 'react'
import Details from "../UI/Details"

const Info = () => {
  return (
    <div className='bg-red-300 text-black p-10 m-10'>
        <div className='text-3xl font-extrabold'>Info component</div>

        {/* <div>{info}</div> */}
        <Details></Details>
    </div>
  )
}

export default Info