import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

const navigate= useNavigate();
function handleClick(){
  navigate('/about')
}



  return (
    <div>
     Home page
     <br/>
     <button style={{
    padding: "12px 24px",margin: "10px",fontSize: "16px",fontWeight: "bold",border: "none",borderRadius: "8px",backgroundColor: "#eb1811",color: "white",cursor: "pointer"}}  onClick={handleClick}>Move to About page</button>
    </div>
  )
}

export default Home
