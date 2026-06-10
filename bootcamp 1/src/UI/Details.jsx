import React from 'react'
import { useContext } from 'react'
import ThemeRandom from './hooks/themeContext'

const Details = () => {

  const data = useContext(ThemeRandom)

  return (
    <div className='bg-pink-300 text-black p-10 m-10'>
        <div className='text-2xl font-bold'>Detailed Component </div>

    <div>{data}</div>
    </div>
  )
}

export default Details