import React from 'react'



const ChildComponent = React.memo((props) => {
  
  // by using React.memo(), now unless the buttonName is not change  in the parent component the childcomponent will not get re render unnecessarily after the render of parent component  


console.log("Child Component go re-rendered again")

  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}   
      </button>
    </div>
  )
})

export default ChildComponent


// in above when i was sending props in the value of child component from the parent component the React.memo was avoiding the child component to get re Render but when i send the function through the props in a child component from the parent the React.memo does not avoid from re rendering