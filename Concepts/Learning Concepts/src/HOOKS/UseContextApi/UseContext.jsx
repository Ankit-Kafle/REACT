import React from 'react';
import '../../App.css';
import ChildA from './ChildA';
import { createContext } from 'react';
import { useState } from 'react';
//step1: create Context
// const UserContext= createContext();
const ThemeContext= createContext();
//step2: wrap all the child inside a provider

//step3: pass value
//step4: consumer ko vitra gayera consume garney
const UseContext = () => {
  // const [user,setUser] = useState({name:"Jai Shree Radhey"});

  const [theme,setTheme]=useState('light');
  return (


    // <div>
    //  <UserContext.Provider value={user}>
    // <ChildA/>

    //  </UserContext.Provider>
  
    // </div>


<ThemeContext.Provider value={{theme,setTheme}}>

  <div id='pellu' style={{backgroundColor:theme==='light'?"beige":"black"}}>
  <ChildA/>
  </div>
</ThemeContext.Provider>

  )
}

export default UseContext
// export {UserContext}
export {ThemeContext}


//Prop drilling is the process of passing data from a parent component through multiple intermediate child components until it reaches the component that actually needs it, even when those middle components don’t use the data themselves. This occurs in React when props must travel down several layers of a component tree to reach a deeply nested component.


//useContext: 1.)Create Context 2.)Provider 3.)Consumer

//The React Context API enables sharing data across components without manually passing props through every level, effectively eliminating prop drilling. It’s ideal for global state like themes, authentication, or user preferences.

// How it works:

// Create a Context using createContext().
// Provide Data with the Provider component, wrapping the part of the tree that needs access.
// Consume Data using the useContext() hook inside any descendant component.

//Best Practices

// Provide default values in createContext() to avoid undefined errors.
// Avoid overuse; only use for truly shared state to prevent unnecessary re-renders.
// Memoize context values with useMemo to optimize performance.
// Use custom hooks to encapsulate useContext logic for cleaner code.
// Separate contexts for unrelated data (e.g., ThemeContext, AuthContext) to keep state modular.

// When to use Context API
// Global state in medium apps (cart, user session).
// Theme toggles (dark/light mode).
// Authentication and permissions.
// Localization and user preferences.