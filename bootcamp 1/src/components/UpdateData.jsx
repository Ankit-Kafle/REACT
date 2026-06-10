import React, { useEffect, useState } from 'react'
import axios from 'axios'
const UpdateData = () => {

    const [gotData , setGotData] = useState(null)
    const [updateData, setUpdateData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""    
    })

    const url = "https://dummyjson.com/users"
    let id = 2
    async function getDatabyid(id){
        try {
            const response = await axios.get(`${url}/${id}`)
            setGotData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getDatabyid(id)
    },[])

    function handleChange(event){
        const { name, value } = event.target
        setUpdateData(prevData => ({
            ...prevData,
            [name]: value,
        }))
    }

    async function handleSubmit(e){
        e.preventDefault()
        try {
           const response = await axios.put(`${url}/${id}`, updateData)
           console.log(updateData)
           console.log("Form UpData Submited...")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
       <div className='flex h-screen justify-center items-center'>
            <form className='bg-green-100 text-black w-auto px-20 py-3 m-10' onSubmit={handleSubmit}>

                <div>
                    <div>
                        <label htmlFor="fname">First Name:</label> <span className='text-red-900'>*</span>
                    </div>
                    <input
                        value={gotData?.firstName}
                        onChange={handleChange}
                        type="text" name='firstName' className='px-10 py-3 outline-1 focus:outline-1 focus:outline-red-700 rounded-sm' />
                </div>

                <div>
                    <div>
                        <label htmlFor="lname">Last Name:</label> <span className='text-red-900'>*</span>
                    </div>
                    <input
                    value={gotData?.LastName}
                        onChange={handleChange}
                        type="text" name='lastName' className='px-10 py-3 outline-1 focus:outline-1 focus:outline-red-700 rounded-sm' />
                </div>

                <div>
                    <div>
                        <label htmlFor="email">Email:</label> <span className='text-red-900'>*</span>
                    </div>
                    <input
                    value={gotData?.email}
                        onChange={handleChange}
                        type="email" name='email' className='px-10 py-3 outline-1 focus:outline-1 focus:outline-red-700 rounded-sm' />
                </div>

                <div>
                    <div>
                        <label htmlFor="password">Password</label> <span className='text-red-900'>*</span>
                    </div>
                    <input
                        value={gotData?.password}
                        onChange={handleChange}
                        type="password" name='password' className='px-10 py-3 outline-1 focus:outline-1 focus:outline-red-700 rounded-sm' />
                </div>

                <button type='submit' className='bg-green-800 text-white px-10 py-3 border-none hover:bg-green-500 hover:text-black mt-4'> Submit </button>

            </form>
        </div>
    </div>
  )
}

export default UpdateData