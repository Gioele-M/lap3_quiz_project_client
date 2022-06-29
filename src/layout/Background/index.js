import React from 'react'


const Background = () => {
    
    // let randomYPositions = []
    // let randomXPositions = []
    
    let divs = []
    const renderDivs = () => {
        divs = []
        let randomYPositions = []
        let randomXPositions = []
        for(let i = 0; i < 15; i++){
            let randomTop = Math.floor(Math.random()*100)  
            let randomLeft = Math.floor(Math.random()*100)
            let randQMark = Math.floor(Math.random()*4)
            const checkYPos = (yValue) => {
                randomYPositions.includes(yValue)
            }
            const checkXPos = (yValue) => {
                randomYPositions.includes(yValue)
            }
            while(checkYPos(randomTop) || checkYPos(randomTop + 1) || checkYPos(randomTop - 1) || checkYPos(randomTop + 2) || checkYPos(randomTop - 2) || checkYPos(randomTop + 3) || checkYPos(randomTop - 3)){
                randomTop = Math.floor(Math.random()*100) 
            }
            while(checkXPos(randomLeft) || checkXPos(randomLeft + 1) || checkXPos(randomLeft - 1) || checkXPos(randomLeft + 2) || checkXPos(randomLeft - 2) || checkXPos(randomLeft + 3) || checkXPos(randomLeft - 3)){
                randomLeft = Math.floor(Math.random()*100) 
            }
            randomYPositions.push(randomTop)
            randomXPositions.push(randomLeft)
            console.log('hi')
                divs.push(
                            <>
                                <div className={`questionMark questionMark${randQMark}`} style={{top: `${randomTop}%`, left: `${randomLeft}%`}}>?</div>
                            </>
                        )
        }
        return divs
    }
    console.log(divs)
//create 50 divs
        //spread across page using js
        //add animations for rotate and scale
    return (
        <> 
        <div className="backgroundContainer">
            <div className="area1">{renderDivs()}</div>
            <div className="area2">{renderDivs()}</div>
            <div className="area3">{renderDivs()}</div>
            <div className="area4">{renderDivs()}</div>
        </div>
            
        </>
    )

    
}

export default Background;