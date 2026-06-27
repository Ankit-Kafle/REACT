import { useContext } from "react";
import UseContext from "./UseContext";
// import { UserContext } from './UseContext'
import { ThemeContext } from './UseContext'

const ChildC = () => {
  // const user= useContext(UserContext);
 const {theme,setTheme}= useContext(ThemeContext);

function handleClick(){
  if(theme==='light')
    setTheme('dark')
  else
    setTheme('light')
}


 
  return (
    <div>
      {/* Hare Krishna
      <br/>
      {user.name} */}

      <button onClick={handleClick}>Change Theme</button>
    </div>
  )
}

export default ChildC
