import './Home.css'
import {Button} from '../Shared/Navbar.css.jsx'

const Home = () =>{

    const styles = {

    }
    //logics

    return (
        <>
            {/* html elements */}
            <section className="flex h-screen justify-center items-center">
                HEy i am Home 

                {/* <button style={{backgroundColor:"green", color:'white',border:"none", padding:"8px 20px", cursor:"pointer"}}>
                    CLick Me!
                </button> */}

                <Button bgColor="green" color='White'> Home Button </Button>
            </section>
        </>
    )
}

export default Home 