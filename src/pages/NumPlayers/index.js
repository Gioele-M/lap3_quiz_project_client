import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const NumPlayers = () => {

    const [idNumbers, setIdNumbers] = useState([1, 2, 3, 4])
    const [direction, setDirection] = useState("")
    let navigate = useNavigate();
    const leftButton = () => {
        console.log('go left')
        setDirection("left")
        let newOrder = []
        for(let i = idNumbers.length - 1; i >= 0 ; i--){
            
            if(idNumbers[i] === 1){
                newOrder.unshift(idNumbers[i] = 4)
            }else{
                newOrder.unshift(idNumbers[i] -= 1)
            }
        }
        setIdNumbers(newOrder)
    }
    const rightButton = () => {
        console.log('go right')
        setDirection("right")
        let newOrder = []
        for(let i = idNumbers.length - 1; i >= 0 ; i--){
            if(idNumbers[i] === 4){
                newOrder.unshift(idNumbers[i] = 1)
            }else{
                newOrder.unshift(idNumbers[i] += 1)
            }
        }
        setIdNumbers(newOrder)
    }
    return (
        <>
            <h1>Select number of players</h1>
            <div className="sliderContainer">
                <button className="btn btn-next" onClick={leftButton}> Left </button>
                <div className="slider">
                    <div className={"slide " + direction} id={"slide" + idNumbers[0]}>
                        <h2>1</h2>
                    </div>
                    <div className={"slide " + direction} id={"slide" + idNumbers[1]}>
                        <h2>2</h2>
                    </div>
                    <div className={"slide " + direction} id={"slide" + idNumbers[2]}>
                        <h2>3</h2>
                    </div>
                    <div className={"slide " + direction} id={"slide" + idNumbers[3]}>
                        <h2>4</h2>
                    </div>
                </div>
                <button className="btn btn-prev" onClick={rightButton}> Right </button>
            </div>
            <button onClick={()=>navigate("/home")}>Go back</button>
            <button onClick={()=>navigate("/category")}>Go to category selection</button>
        </>
    )
}

export default NumPlayers;