export const About  = () =>{

    // logic
    const generateNumber = () =>{
        document.getElementById("randomNum").innerHTML = Math.floor(Math.random() * 9999)
    }

    let count = 0;
    const increment = () =>{
        if (count >=0 && count <=50)
            document.getElementsByClassName('value')[0].innerHTML = count++
        else{
            document.getElementsByClassName('value')[0].innerHTML = "You hit the limit"
        }
    }

    const decrement =() =>{
        if (count > 0){
            document.getElementsByClassName('value')[0].innerHTML = count--
        }
        else{
            document.getElementsByClassName('value')[0].innerHTML = "You hit the limit"
        }
    }

    return(
        <>
        <main className="flex h-screen justify-center items-center flex-col gap-4">
            <button className="bg-green-300 text-black rounded-sm border-none font-bold py-2 px-6" onClick={generateNumber}>Generate Numbers </button>
            <h1 id="randomNum">000</h1>

            <section className="counter bg-pink-700 text-white font-bold flex flex-col gap-4 p-10">
                <h1>Counter</h1>
                <p className="value text-6xl font-extrabold">0</p>

                <button className="bg-green-300 text-black rounded-sm border-none font-bold py-2 px-6" onKeyUp={increment}>Increment </button>
                
                <button className="bg-red-300 text-black rounded-sm border-none font-bold py-2 px-6" onMouseOver={decrement}>Decrement </button>

            </section>
        </main>






            
        </>
    )   
}