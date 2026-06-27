import './StateLifting.css'
const StateLifting = (props) => {

// What is State Lifting?
// In React, each component can maintain its own state. However, when two or more components need to share the same state, duplicating it in each component can lead to inconsistencies. Lifting state up solves this by moving the shared state to the closest common ancestor of the components that need it. The parent component then manages the state and passes it down to child components via prop






  return (
    <div className='cdd'>
      <input type='text' onChange={(e)=> props.setNama(e.target.value)}/>
      <p>The value of name state variable inside this {props.title} child component is: {props.nama}</p>

    </div>
  )
}

export default StateLifting
