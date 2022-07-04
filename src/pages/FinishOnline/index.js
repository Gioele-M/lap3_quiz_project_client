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
<<<<<<< HEAD
    const [hsUsernames, setHsUsernames] = useState([])
=======
    const [hsModalVisibilityInverse, setHsModalVisibilityInverse] = useState('visible')

    const [hsUsernames, setHsUsernames] = useState([
        {username: "bob123", total: 1, percentage: 12},
        {username: "tina123", quizzes: 9, percentage: 9},
        {username: "louise123", quizzes: 8, percentage: 9},
        {username: "gene123", quizzes: 7, percentage: 6}
        // {username: "linda123", quizzes: 6, points: 5},
        // {username: "teddy456", quizzes: 5, points: 5},
        // {username: "mort456", quizzes: 4, points: 4},
        // {username: "jimmy666", quizzes: 1, points: 1}

    ])
>>>>>>> e02f3049ef19b14f4b62ef967288df27245cbab0

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

<<<<<<< HEAD
        if(hasToBePushed){
            playersWhoCompletedGame.push(toAppend)
        }
            setNOfPlayersDone(playersWhoCompletedGame.length)
            if(playersWhoCompletedGame.length === roomSize){
=======

        console.log('Completed check... has to be pushed? ' + hasToBePushed)
        if(hasToBePushed){
            playersWhoCompletedGame.push(toAppend)

            setNOfPlayersDone(playersWhoCompletedGame.length)
            console.log('I have pushed this object in the array!!')
            console.log(toAppend)
            console.log('Now the array is:')
            console.log(playersWhoCompletedGame)}

            if(playersWhoCompletedGame.length == roomSize){
                console.log('Emitting that everyone is done!!')
>>>>>>> e02f3049ef19b14f4b62ef967288df27245cbab0
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
<<<<<<< HEAD
            <h1 className='selectionH1'>Game finished online</h1>
            <p className='playerPara'>Players who completed the game so far: {nOfPlayersDone}</p>
=======
            <h1 className='selectionH1'>Game finished</h1>
            <p className='playerPara' style={{visibility: hsModalVisibilityInverse}}>Wait for other players to complete the game!</p>
>>>>>>> e02f3049ef19b14f4b62ef967288df27245cbab0
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