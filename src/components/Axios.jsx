import axios from 'axios';
import { useState, useEffect } from 'react'

const AxiosPractice = () => {
    let url = "https://dummyjson.com/products"

    const [users, setUsers] = useState([])


    // use Effect

    // useEffect(() =>{
    //     console.log("Component Mounted")
    // })

    async function fetchData() {
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
        } catch (err) {
            console.log("Error Occured", err)
        }
    }

    async function axiosData() {
        const data = await axios.get(url)
        console.log(data)
        setUsers(data.data.products)
    }

    return (
        <>
            <button className="bg-green-600 text-white" onClick={fetchData}>Fetch Data</button>
            <button className="bg-yellow-800 text-white" onClick={axiosData}>Axios Data</button>

            <section className="card flex flex-wrap justify-center items-center">
                {users.map((user, idx) => {
                    return (
                        <>
                            {user.reviews.map((review, idx) => {
                                return (
                                    <>
                                        <div key={idx} className="div">{review.comment}</div>
                                    </>
                                )
                            })}
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default AxiosPractice;


