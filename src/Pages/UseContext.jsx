import React, { useState } from 'react'
import Card from '../UI/Card'
import ThemeContext from '../UI/hooks/themeContext'

const UseContext = () => {

    const [data, setData] = useState(0);

    const randomValue = () => {
      setData(Math.floor(Math.random() * 999))
    }

  return (
    <div className='bg-violet-300 text-black p-10 m-10'>
       <div className='text-6xl font-extrabold'>Main Component</div>

      <button onClick={randomValue} className='bg-white p-5 m-5 rounded-lg'>Click me</button>
<h1 className='text-3xl'>{data}</h1>
        <ThemeContext.Provider value={data} >
        <Card></Card>
        </ThemeContext.Provider>
    </div>
  )
}

export default UseContext