import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PostData = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const url = "https://dummyjson.com/users/add"

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }))
    }

    async function handleSubmit(e){
        e.preventDefault()
        try {
           const response = await axios.create(url, formData)
           console.log(formData)
           console.log("Form Data Submited...")
        } catch (error) {
            console.log(error)
        }
    }


    function editData(){
        navigate('/editdata')
    }

    return (
        <div className='flex h-screen justify-center items-center'>

            <button className='bg-yellow-300 text-white px-10 py-3 border-none' onClick={editData}>Edit Data</button>


            <form className='bg-green-100 text-black w-auto px-20 py-3 m-10' onSubmit={handleSubmit}>

                <div>
                    <div>
                        <label htmlFor="fname">First Name:</label> <span className='text-red-900'>*</span>
                    </div>
                    <input
                        onChange={handleChange}
                        type="text" name='firstName' className='px-10 py-3 outline-1 focus:outline-1 focus:outline-red-700 rounded-sm' />
                </div>

                <div>
                    <div>
                        <label htmlFor="lname">Last Name:</label> <span className='text-red-900'>*</span>
                    </div>
                    <input
                        onChange={handleChange}
                        type="text" name='lastName' className='px-10 py-3 outline-1 focus:outline-1 focus:outline-red-700 rounded-sm' />
                </div>

                <div>
                    <div>
                        <label htmlFor="email">Email:</label> <span className='text-red-900'>*</span>
                    </div>
                    <input
                        onChange={handleChange}
                        type="email" name='email' className='px-10 py-3 outline-1 focus:outline-1 focus:outline-red-700 rounded-sm' />
                </div>

                <div>
                    <div>
                        <label htmlFor="password">Password</label> <span className='text-red-900'>*</span>
                    </div>
                    <input
                        onChange={handleChange}
                        type="password" name='password' className='px-10 py-3 outline-1 focus:outline-1 focus:outline-red-700 rounded-sm' />
                </div>

                <button type='submit' className='bg-green-800 text-white px-10 py-3 border-none hover:bg-green-500 hover:text-black mt-4'> Submit </button>

            </form>
        </div>
    )
}

export default PostData