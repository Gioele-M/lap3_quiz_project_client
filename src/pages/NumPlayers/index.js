import React from 'react'
import { useNavigate } from "react-router-dom";

const NumPlayers = () => {
    let navigate = useNavigate();
    return (
        <>
            <h1>Select number of players</h1>
            <div className="slider">
                <div className="slide">
                    <h2>1</h2>
                </div>
                <div className="slide">
                    <h2>2</h2>
                </div>
                <div className="slide">
                    <h2>3</h2>
                </div>
                <div className="slide">
                    <h2>4</h2>
                </div>
            </div>
            <button onClick={()=>navigate("/home")}>Go back</button>
            <button onClick={()=>navigate("/category")}>Go to category selection</button>
        </>
    )
}

export default NumPlayers;