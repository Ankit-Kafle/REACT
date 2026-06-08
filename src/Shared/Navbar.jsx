import { Button } from './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () =>{
  return(
    <>
    <nav className="bg-red-900 text-white px-10 py-4 flex justify-between items-center">
      <section className="logo text-4xl font-extrabold">LOGO </section>
      <ul className=" flex gap-4">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to="/axios">Axios</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/optimization">Optimization</Link></li>
        <li><Link to="/useeffect">UseEffect</Link></li>
        <li><Link to="/usecontext">UseContext</Link></li>
        <Button bgColor="yellow" color="black"> Click Me </Button>
      </ul> 
    </nav>
      
    </>
  ) 
}

export default Navbar 




