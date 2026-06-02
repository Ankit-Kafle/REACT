import './App.css'
import Home from './Pages/Home'
import { About } from './Pages/About'
import Navbar from './Shared/Navbar'
import AxiosPractice from './components/Axios'

import { Routes, Route}  from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/axios" element={<AxiosPractice />} />
      <Route path="*" element={<h1 className=" text-9xl font-extrabold text-red-500 m-10  ">404 Not Found</h1>} />
    </Routes>

    </>
  )
}

export default App

