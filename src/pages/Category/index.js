import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Category = () => {
    let navigate = useNavigate();

    const [categoryIdNumbers, setCategoryIdNumbers] = useState([1, 2, 3, 4, 5])
    const [categoryDrection, setCategoryDirection] = useState("")

    const categoryLeftButton = () => {
        console.log('go left')
        setCategoryDirection("left")
        let newOrder = []
        for(let i = categoryIdNumbers.length - 1; i >= 0 ; i--){
            
            if(categoryIdNumbers[i] === 1){
                newOrder.unshift(categoryIdNumbers[i] = 5)
            }else{
                newOrder.unshift(categoryIdNumbers[i] -= 1)
            }
        }
        setCategoryIdNumbers(newOrder)
    }
    const categoryRightButton = () => {
        console.log('go right')
        setCategoryDirection("right")
        let newOrder = []
        for(let i = categoryIdNumbers.length - 1; i >= 0 ; i--){
            if(categoryIdNumbers[i] === 5){
                newOrder.unshift(categoryIdNumbers[i] = 1)
            }else{
                newOrder.unshift(categoryIdNumbers[i] += 1)
            }
        }
        setCategoryIdNumbers(newOrder)
    }
    return (
        <>
            <h1>Select your category</h1>
            <div className="sliderContainer">
                <button className="btn btn-next" onClick={categoryLeftButton}> Left </button>
                <div className="slider">
                    <div className={"slide " + categoryDrection} id={"categorySlide" + categoryIdNumbers[0]}>
                        <h2>General knowledge</h2>
                    </div>
                    <div className={"slide " + categoryDrection} id={"categorySlide" + categoryIdNumbers[1]}>
                        <h2>Science & Nature</h2>
                    </div>
                    <div className={"slide " + categoryDrection} id={"categorySlide" + categoryIdNumbers[2]}>
                        <h2>Sports</h2>
                    </div>
                    <div className={"slide " + categoryDrection} id={"categorySlide" + categoryIdNumbers[3]}>
                        <h2>History</h2>
                    </div>
                    <div className={"slide " + categoryDrection} id={"categorySlide" + categoryIdNumbers[4]}>
                        <h2>Animals</h2>
                    </div>
                </div>
                <button className="btn btn-prev" onClick={categoryRightButton}> Right </button>
            </div>
            <button onClick={()=>navigate("/numplayers")}>Go back</button>
            <button onClick={()=>navigate("/difficulty")}>Go to difficulty selection</button>
        </>
    )
}

export default Category;