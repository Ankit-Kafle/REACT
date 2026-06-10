import { useEffect, useState } from "react";

const UseEffect = () => {
    const [data, setData] = useState([]);
    const [randomOne, setRandomOne] = useState(0);
    const [randomTwo, setRandomTwo] = useState(0);

    async function fetchData() {
        try {
            const response = await fetch(
                "https://dummyjson.com/products"
            );
            const result = await response.json();
            setData(result.products);
        } catch (err) {
            console.log("Error Occurred", err);
        }
    }

    function randomValue() {
        const randomNum = Math.floor(Math.random() * 999);
        setRandomOne(randomNum);
    }

    function randomValue2nd() {
        const randomNum = Math.floor(Math.random() * 999);
        setRandomTwo(randomNum);
    }

    useEffect(() => {
        console.warn("Component Mounted");
        fetchData();
    }, []);

    useEffect(() => {
        console.log("Random One Changed:", randomOne);
    }, [randomOne]);

    useEffect(() => {
        console.log("Random Two Changed:", randomTwo);
    }, [randomTwo]);

    return (
        <>
            <h1>UseEffect</h1>

            <button onClick={randomValue}>
                Generate Random One
            </button>

            <button onClick={randomValue2nd}>
                Generate Random Two
            </button>

            <h2>Random One: {randomOne}</h2>
            <h2>Random Two: {randomTwo}</h2>

            <p>{JSON.stringify(data)}</p>
        </>
    );
};

export default UseEffect;