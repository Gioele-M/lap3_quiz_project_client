import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

const Finish = () => {
    let navigate = useNavigate();

    const players = useSelector((state) => state.players);
    const statePlayerOneScore = useSelector((state) => state.playerOneScore);
    const statePlayerTwoScore = useSelector((state) => state.playerTwoScore);
    const statePlayerThreeScore = useSelector((state) => state.playerThreeScore);
    const statePlayerFourScore = useSelector((state) => state.playerFourScore);
    const gameMode = useSelector((state) => state.mode);
    let scores = []
    const user = useSelector((state) => state.user); 

    const getScoresArray = () => {
        if(gameMode === "rank"){
            scores.push([user, statePlayerOneScore])
        } else {
        if(players === "1"){
            scores.push(["Player One", statePlayerOneScore])
        }else if(players === "2"){
            scores.push(["Player One", statePlayerOneScore])
            scores.push(["Player Two", statePlayerTwoScore])
        }else if(players === "3"){
            scores.push(["Player One", statePlayerOneScore])
            scores.push(["Player Two", statePlayerTwoScore])
            scores.push(["Player Three", statePlayerThreeScore])
        }else if(players === "4"){
            scores.push(["Player One", statePlayerOneScore])
            scores.push(["Player Two", statePlayerTwoScore])
            scores.push(["Player Three", statePlayerThreeScore])
            scores.push(["Player Four", statePlayerFourScore])
        }
        scores.sort(function(a, b) {
            return a[1] - b[1];
        });
        scores.reverse()
        }
    }
    getScoresArray()
    const renderedScores = scores.map((score, i) => {
        return (
          <tr key={i}>
            <td>{score[0]}</td>
            <td>{score[1]}</td>
          </tr>
        );
      });


    const declareWinner = () => {
        const winningValue = scores[0][1]
        const winnersScores = scores.filter(word => word[1] === winningValue)
        let winningSentence = ""
        if(winnersScores.length === 1){
            winningSentence = `${scores[0][0]} wins!`
            return winningSentence
        }else if(winnersScores.length === 2){
            winningSentence = `${scores[0][0]} and ${scores[1][0]} win!`
            return winningSentence
        }else if(winnersScores.length === 3){
            winningSentence = `${scores[0][0]}, ${scores[1][0]}, and ${scores[2][0]} all win!`
            return winningSentence
        }else if(winnersScores.length === 4){
            winningSentence = `${scores[0][0]}, ${scores[1][0]}, ${scores[2][0]}, and ${scores[3][0]} all win!`
            return winningSentence
        }
        return scores[0][1]
    }
    return (
        <>
            <h1 className="selectionH1">Final Scores</h1>
            <div className="scores">
                {scores.length && (
                    <>{gameMode !== "rank" && <h2 className="scoresH2">{declareWinner()}</h2>}
                        
                        <table className="scoresTable">
                            <thead>
                                <tr>
                                    <th>Player</th>
                                    <th>Score</th>  
                                </tr>
                            </thead>
                            <tbody>
                              {renderedScores}  
                            </tbody>
                        </table>
                    </>
                )}
            </div>
            <button className="homeButton" onClick={()=>navigate("/home")}>Home</button>
        </>
    )
}

export default Finish;