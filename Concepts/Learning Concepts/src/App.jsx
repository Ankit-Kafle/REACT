import { useState } from 'react'
import UserCard from './Components/UserCard'
import UseState from './HOOKS/UseState/UseState'
import PropsAsChild from './TintiMintiConcepts/PropsAsChild'
import StateLifting from './TintiMintiConcepts/StateLifting'
import Logout from './Components/Logout'
import Login from './Components/Login'
import UseEffect from './HOOKS/UseEFFECT/UseEffect'
import UseContext from './HOOKS/UseContextApi/UseContext'
import Route from './Routing/Route'
import Navbar from './Routing/Navbar'
import Form from './HOOKS/ReactForm/Form'
import UseRef from './HOOKS/UseRef/UseRef'
import UseMemo from './HOOKS/UseMemo/UseMemo'
import UseCallback from './HOOKS/UseCallback/UseCallback'


const App = () => {

  //this is for propsAsChild concept of TintiMinti Concept
const [count,setCount]= useState(0);
function handleClick(){
  setCount(count+1);
}


 //this is for stateLifting concept of TintiMinti Concept
 const [name,setName]= useState('');

//this is for conditional rendering case for login.jsx and logout.jsx 
const [isLoggedIn,setLoggedIn]=useState(true);

//this is for event handling case 
function mouseOver(){
  console.log("you mouseover the paragraph. Govinda govinda")
}

function handleInputChange(event){
  console.log(event.target.value); 
}
function handleSubmit(e){
  e.preventDefault(); //default behaviour of form lai prevent garxam. default behaviour vhaneko form submit garda yesla feri pg lai refresh garxa,server samma hamro request lai ligera janxa.

  //writing my own coustom behaviour down

  alert("Form is submitted down here");
}

return (
  <>
<h1>Good to see </h1>
    <div>

       {/* THIS IS THE SIMPLE EXAMPLE FOR COMPONENTS IMPLEMENTING IN OU APP */}
      <UserCard name="Ragupati" desc=" Bolo Ragavendra Sarkar ke JAY"  style={{ borderRadius: '15px' }}/>   {/* this value in html refers to attribute but in case of jsx they are not attributes but they are actually props (data which we are going to pass)*/}
      <UserCard name="Ragavendra Sarkar"  desc="Description of Ram is Hanuman" style={{ borderRadius: '15px' }}/>
   {/* we can also send image using images={image_name} */}
    </div>



    <div>
      <UseState/>
      </div>



<div>

<div>
  <PropsAsChild name="Madhav_tithi">
 {/* ANY contents inside the components are called children
      eg:   <h1> .. </h1>,   <p> ... </p> etc 
      
      */}

      <h1>Ekadasi Coding Vibe</h1>
      <p>Caturmas or Mallamas last Ekadasi i think</p>
      <p> soon i will complete this react and move on backend </p>

  </PropsAsChild>
</div>

<div>
<PropsAsChild  children="This is another method to send the children">

</PropsAsChild>
</div>


<div>
  <PropsAsChild   incrementCount={handleClick}  text="Click ME" >   {/* this handleClick function is at top */}

<h1>{count}</h1>
    </PropsAsChild>
</div>
</div>



<div>


{/* parent component (i.e App.jsx) says
i will create a state, manage the state, change the state, and sync the state in all child */}


<StateLifting title="Card1" nama={name} setNama={setName}/>
<StateLifting title="Card2" nama={name} setNama={setName}/>

<p
  style={{
    color: "white", backgroundColor: "black",  padding: "10px",borderRadius: "8px",fontSize: "16px",}}>
  I am inside parent Component and Value of name is {name}
</p>
</div>

<div>
  {isLoggedIn
    ? <Logout onClick={() => setLoggedIn(false)} />
    : <Login onClick={() => setLoggedIn(true)} />}
</div>

{/* Event handling in react */}
<div>

<p style={{
    color: "white", backgroundColor: "black",  padding: "10px",borderRadius: "8px",fontSize: "16px",}} onMouseOver={mouseOver}>lets check the mouse over event handling function</p>





<button style={{
    padding: "12px 24px",margin: "10px",fontSize: "16px",fontWeight: "bold",border: "none",borderRadius: "8px",backgroundColor: "#d6b213",color: "white",cursor: "pointer"
  }} onClick={()=>{alert("i got clicked. Jai shree Krishna")}}>Click Me</button>


<form className="input-form" onSubmit={handleSubmit}>
  <input
    className="input-field"
    type="text"
    onChange={handleInputChange}
    placeholder="Enter your text..."
  />

  <button className="submit-btn" type="submit">
    Submit
  </button>
</form>


</div>



{/* USE EFFECT CASE */}
<div>
  <UseEffect/>
</div>






{/* useContext API */}
<div>
<UseContext/>

</div>


{/* routing */}
<div>

 <Route/>
</div>




{/*Form In React  */}
<br/>
<div>
  <Form/>
</div>

{/* UseREf */}
<div>
<UseRef/>
</div>

{/* UseMemo */}
<div>
  <UseMemo/>
</div>
<br /><br />

{/* useCallback */}
<div>
  <UseCallback/>
</div>



  </>
)
}

export default App
