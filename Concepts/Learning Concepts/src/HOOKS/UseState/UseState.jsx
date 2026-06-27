import './UseState.css'



// In React, Hooks are special functions that allow you to use state and other React features inside functional components without writing class components. Introduced in React 16.8, they let you "hook into" the component’s lifecycle and underlying internal state directly from your functions.


//EG: person(who want use the features of react) + umbrella(hooks/utility)  => Train(React Features )   now that person can attain same speed as of train by using the hook

//Common Built-In HooksReact provides several built-in hooks depending on what functionality you need to manage:
// useState: Tracks local data or states that change over time. Updating it triggers a component re-render.
// useEffect: Handles side effects like fetching external data, setting up event subscriptions, or manually changing the DOM.
// useContext: Reads and subscribes to data from React Context directly, avoiding the need to pass props through multiple levels of components.useRef: Holds a mutable reference value that persists across renders but does not trigger a re-render when its value changes.
// useMemo / useCallback: Cache calculated values or functions respectively to optimize performance and prevent unnecessary re-computations.



import { useState } from 'react';
const UseState = () => {
  const [count,setCount]=useState(0);

  //Note: never do directly immediate invoke while using onClick instead use arrow function or function otherwise it will be render automatically when your page is loaded
  return (
    <div className='counter-container'>
      <p id='para'>You have clicked {count} times</p>
      <button id='btn'   onClick={()=>{setCount(count+1)}}>Increase</button>
      <button id='btn'  onClick={()=>{setCount(count-1)}}>Decrease</button>
    </div>
  )
}

export default UseState
