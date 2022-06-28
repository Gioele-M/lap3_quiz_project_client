import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { fetchResults } from '../../actions'

const Difficulty = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const [difficultyLi, setDifficultyLi] = useState('')
    //redux functions
    const difficulty = useSelector(state => {
        // console.log({ state })
        return state.difficulty
    })
    
    const handleDifficulty = (e) => {
        let selectedDifficulty = e.target.textContent
        setDifficultyLi("Difficulty: " + e.target.textContent)
        let newDifficulty = selectedDifficulty.toLowerCase()
        dispatch({ type: 'SET DIFFICULTY', payload: newDifficulty }) 
    }
    
    //animation functions
    ////sets initial states
    const [difficultyIdNumbers, setDifficultyIdNumbers] = useState([1, 2, 3])
    const [difficultyDirection, setDifficultyDirection] = useState("")
    ////when clicked, id numbers of divs change so they move to position assigned in css and perform an animation (repeated for right button)
    const difficultyLeftButton = () => {
        // console.log('go left')
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
        // console.log('go right')
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
    const stateAmount = useSelector((state) => state.amount);
    const stateCategory = useSelector((state) => state.category);
    const stateDifficulty = useSelector((state) => state.difficulty);
    const statePlayers = useSelector((state) => state.players);
    const stateCategoryDesc = useSelector((state) => state.categoryDesc);
    
    const getResults = () => dispatch(fetchResults(stateAmount, stateCategory, stateDifficulty));

    const handleConfirmation = (e) => {
        e.preventDefault()
        getResults()
        navigate("/quiz")
    }
    return (
        <>
            <h1>Select your difficulty</h1>
            <div className="sliderContainer">
                <button className="btn btn-next" onClick={difficultyLeftButton}> Left </button>
                <div className="slider">
                    <div className={"slide " + difficultyDirection} id={"difficultySlide" + difficultyIdNumbers[0]} onClick={handleDifficulty}>
                        <h2>Easy</h2>
                    </div>
                    <div className={"slide " + difficultyDirection} id={"difficultySlide" + difficultyIdNumbers[1]} onClick={handleDifficulty}>
                        <h2>Medium</h2>
                    </div>
                    <div className={"slide " + difficultyDirection} id={"difficultySlide" + difficultyIdNumbers[2]} onClick={handleDifficulty}>
                        <h2>Hard</h2>
                    </div>
                </div>
                <button className="btn btn-prev" onClick={difficultyRightButton}> Right </button>
            </div>
            <button onClick={()=>navigate("/category")}>Go back</button>
            <button onClick={handleConfirmation}>Confirm selections</button>
            <div className="selections">
                <p>Selections</p>
                <ul>
                    <li>Players: {statePlayers}</li>
                    <li>Category: {stateCategoryDesc}</li>
                    <li>{difficultyLi}</li>
                </ul>
            </div>
        </>
    )
}

export default Difficulty;