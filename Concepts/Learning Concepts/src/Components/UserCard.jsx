import './UserCard.css'


const UserCard = (props) => { //here in this way the data is recieved by this function that is passed from the app.jsx by using component
  return (
    <div className='user_container' style={props.style}>
      <p id='user-name'>Love {props.name} Ram </p>
   <img id='user-img' src="/Photo/Hanuman.jpg" alt="Jai Siya Ram" />
      <p id='user-id'>{props.desc}</p>
    </div>
  )
}

export default UserCard