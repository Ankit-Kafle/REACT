import "./App.css";
import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import ContactForm from "./Components/ContactForm/ContactForm";

const App = () => {
  return (
    <>
    <div>
      <Navigation/>
      <main className="main_container">
        <ContactHeader/>
      <ContactForm/>
      </main>
    </div>
    </>
  )
}

export default App
