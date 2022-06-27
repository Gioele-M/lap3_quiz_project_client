import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();
    return (
        <>
            <h1>Dumbfounded</h1>
            <button onClick={()=>navigate("/numplayers")}>Go to game setup</button>
        </>
    )
}

export default Home;