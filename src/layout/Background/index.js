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
            let randomTop = Math.floor(Math.random()*80)  
            let randomLeft = Math.floor(Math.random()*80)
            let randQMark = Math.floor(Math.random()*4)

            while(randomYPositions.includes(randomTop) || randomYPositions.includes(randomTop + 1) || randomYPositions.includes(randomTop - 1) || randomYPositions.includes(randomTop + 2) || randomYPositions.includes(randomTop - 2) || randomYPositions.includes(randomTop + 3) || randomYPositions.includes(randomTop - 3)){
                randomTop = Math.floor(Math.random()*80) 
            }
            
            while(randomXPositions.includes(randomLeft) || randomXPositions.includes(randomLeft + 1) || randomXPositions.includes(randomLeft - 1) || randomXPositions.includes(randomLeft + 2) || randomXPositions.includes(randomLeft - 2) || randomXPositions.includes(randomLeft + 3) || randomXPositions.includes(randomLeft - 3)){
                randomLeft = Math.floor(Math.random()*80) 
            }
            randomYPositions.push(randomTop)
            randomXPositions.push(randomLeft)
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