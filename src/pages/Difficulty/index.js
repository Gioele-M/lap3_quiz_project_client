import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Difficulty = () => {
    let navigate = useNavigate();
    const [difficultyIdNumbers, setDifficultyIdNumbers] = useState([1, 2, 3])
    const [difficultyDrection, setDifficultyDirection] = useState("")
    
    const difficultyLeftButton = () => {
        console.log('go left')
        setDifficultyDirection("left")
        let newOrder = []
        for(let i = difficultyIdNumbers.length - 1; i >= 0 ; i--){
            
            if(difficultyIdNumbers[i] === 1){
                newOrder.unshift(difficultyIdNumbers[i] = 3)
            }else{
                newOrder.unshift(difficultyIdNumbers[i] -= 1)
            }
        }
        setDifficultyIdNumbers(newOrder)
    }
    const difficultyRightButton = () => {
        console.log('go right')
        setDifficultyDirection("right")
        let newOrder = []
        for(let i = difficultyIdNumbers.length - 1; i >= 0 ; i--){
            if(difficultyIdNumbers[i] === 3){
                newOrder.unshift(difficultyIdNumbers[i] = 1)
            }else{
                newOrder.unshift(difficultyIdNumbers[i] += 1)
            }
        }
        setDifficultyIdNumbers(newOrder)
    }
    return (
        <>
            <h1>Select your difficulty</h1>
            <div className="sliderContainer">
                <button className="btn btn-next" onClick={difficultyLeftButton}> Left </button>
                <div className="slider">
                    <div className={"slide " + difficultyDrection} id={"difficultySlide" + difficultyIdNumbers[0]}>
                        <h2>Easy</h2>
                    </div>
                    <div className={"slide " + difficultyDrection} id={"difficultySlide" + difficultyIdNumbers[1]}>
                        <h2>Medium</h2>
                    </div>
                    <div className={"slide " + difficultyDrection} id={"difficultySlide" + difficultyIdNumbers[2]}>
                        <h2>Hard</h2>
                    </div>
                </div>
                <button className="btn btn-prev" onClick={difficultyRightButton}> Right </button>
            </div>
            <button onClick={()=>navigate("/category")}>Go back</button>
            <button onClick={()=>navigate("/quiz")}>Confirm selections</button>
        </>
    )
}

export default Difficulty;