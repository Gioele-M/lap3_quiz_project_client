import React from 'react'
import { useNavigate } from "react-router-dom";

const NumPlayers = () => {
    let navigate = useNavigate();
    return (
        <>
            <h1>Select number of players</h1>
            <button onClick={()=>navigate("/home")}>Go back</button>
            <button onClick={()=>navigate("/category")}>Go to category selection</button>
        </>
    )
}

export default NumPlayers;