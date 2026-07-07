import { useState } from "react"
import React from "react"
import { useSearchParams } from "react-router-dom";

const Home = () => {

  const [title,setTitle]=useState('');
  const [value,setValue]= useState('');
  const [searchParams,setSearchParams] = useSearchParams('');
  const pasteId= searchParams.get("pasteId")
  return (
    <div>
      <input
      
      className='p-3 rounded-medium mt-2 '
      type='text '
      placeholder='enter title here'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      
      />

      <button>

    {
      pasteId ? "Update my paste":"Create my paste"
    } 
            
      </button>
    </div>
  )
}

export default Home
