import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import socket from '../../actions/socket';

const FinishOnline = () => {
    let navigate = useNavigate();
    let playersWhoCompletedGame = []
    const [nOfPlayersDone, setNOfPlayersDone] = useState(0)
    let showLeaderBoard = false
    const [hsModalVisibility, setHsModalVisibility] = useState('hidden');

    const [hsUsernames, setHsUsernames] = useState([])
    const [hsModalVisibilityInverse, setHsModalVisibilityInverse] = useState('visible')


    const playerName = useSelector((state) => state.user)
    let playerScore = 0

    playerScore = useSelector((state) => state.playerOneScore);
    const questionsAmount = useSelector((state) => state.amount);
    
    useEffect(() => {
        socket.emit('finishGame', playerName, playerScore, questionsAmount)   
    }, [])

    socket.on('playerHasCompleted', (playerId, playerName, result, questionNumber, roomSize)=>{
        const toAppend = {
            playerId: playerId, name : playerName, result: result, questions: questionNumber, roomSize: roomSize 
        }
        if(playersWhoCompletedGame.length < 1){
            playersWhoCompletedGame.push(toAppend)
            setNOfPlayersDone(playersWhoCompletedGame.length)
        }

        let hasToBePushed = true
        for (let index = 0; index < playersWhoCompletedGame.length; index++) {
            const player = playersWhoCompletedGame[index];
            if(player.playerId === playerId){
                hasToBePushed = false                
            }
        }


        if(hasToBePushed){
            playersWhoCompletedGame.push(toAppend)
        }
            setNOfPlayersDone(playersWhoCompletedGame.length)
            if(playersWhoCompletedGame.length === roomSize){
                socket.emit('everyoneIsDone', playersWhoCompletedGame)
            }
        })
        
    socket.off('showLeaderBoard').on('showLeaderBoard', (data) => {
            socket.off('showLeaderBoard')
            showLeaderBoard = true
            let arrayToSend = []
            for(let i = 0; i < data.length; i++){
                const {playerId, name, result, questions, roomSize} = data[i]
                let formattedData = {
                    username: name,
                    total: questions,
                    percentage: parseInt(result)
                }
                arrayToSend.push(formattedData)
            }
            if(arrayToSend.length > 0){
                arrayToSend.sort((a, b) => b.percentage - a.percentage)
                setHsUsernames(arrayToSend)
            }
            setHsModalVisibility('visible')
            setHsModalVisibilityInverse('hidden')


    })

    const renderedScores = hsUsernames.map((score, i) => {
        return (
          <tr key={i}>
            <td>{score.username}</td>
            <td>{score.percentage}</td>
          </tr>
        );
      });

    return (
        <>

            <h1 className='selectionH1'>Game finished</h1>
            <p className='playerPara' style={{visibility: hsModalVisibilityInverse}}>Wait for other players to complete the game!</p>
            <div className='scores' style={{visibility: hsModalVisibility}}>
                <table className="scoresTable" >
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

            </div>
            <button className='homeButton' onClick={()=>navigate("/home")}>Home</button>
        </>
    )
}

export default FinishOnline;