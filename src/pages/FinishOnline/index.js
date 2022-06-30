import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


import socket from '../../actions/socket';

const FinishOnline = () => {
    let navigate = useNavigate();


    let playersWhoCompletedGame = []

    const [nOfPlayersDone, setNOfPlayersDone] = useState(0)
    let showLeaderBoard = false
    const [leaderBoardData, setLeaderBoardData] = useState([])



    //This is going to be a state with the username
    const playerName = 'Player1' // USESELECTOR

    let playerScore = 0

    playerScore = useSelector((state) => state.playerOneScore);
    const questionsAmount = useSelector((state) => state.amount);


    console.log('Player score '+ playerScore)


    // USE EFFECT??

    // This will send (... , loggedUser, result)
    socket.emit('finishGame', playerName, playerScore, questionsAmount)   ///////////// this gets sent twice :(

    // Socket.emit score and amount + player name (useEffect?)

    // think how to pass the room to this

    // set localstate?



    // Listen to how many players completed the quiz

    socket.on('playerHasCompleted', (playerId, playerName, result, questionNumber, roomSize)=>{
        console.log('player has completed print!')
        console.log(playerId, playerName, result, questionNumber, roomSize)


        const toAppend = {
            playerId: playerId, name : playerName, result: result, questions: questionNumber, roomSize: roomSize 
        }


        // If playersWhoCompleted game is empty we need to initialise array

        if(playersWhoCompletedGame.length < 1){
            playersWhoCompletedGame.push(toAppend)
            setNOfPlayersDone(playersWhoCompletedGame.length)

        }


        // Check if new user completed is already in the array

        let hasToBePushed = true

        for (let index = 0; index < playersWhoCompletedGame.length; index++) {
            const player = playersWhoCompletedGame[index];

            console.log('Print array before checking')
            console.log(playersWhoCompletedGame)
            
            if(player.playerId == playerId){

                hasToBePushed = false                
                
            }
            
        }


        console.log('Completed check... has to be pushed? ' + hasToBePushed)

        if(hasToBePushed){
            playersWhoCompletedGame.push(toAppend)

            setNOfPlayersDone(playersWhoCompletedGame.length)

            console.log('I have pushed this object in the array!!')
            console.log(toAppend)
            console.log('Now the array is:')
            console.log(playersWhoCompletedGame)}




            //IF THE ARRAY LENGTH IS = TO PLAYERS IN THE ROOM SEND MESSAGE TO ROOM WITH ALL PLAYERS AND SCORES

            if(playersWhoCompletedGame.length == roomSize){

                console.log('Emitting that everyone is done!!')
                socket.emit('everyoneIsDone', playersWhoCompletedGame)

            }





            socket.on('showLeaderBoard', (data) => {

                console.log('Showing leaderboard!!!!')
        
                setLeaderBoardData(data)

                console.log(data)
                
                showLeaderBoard = true

                console.log('Show leaderboard boolean?? ' + showLeaderBoard)

            })


    })




    function showLeaderBoardFn(){
        
        let data = leaderBoardData

        return(
            <div>
                This is the leaderboard, deal with it
                
            </div>
        )


    }

    




    return (
        <>
            <h1>Game finished online</h1>

            <p>Players who completed the game so far: {nOfPlayersDone}</p>

            <button onClick={()=>navigate("/home")}>Home</button>

            { showLeaderBoard ? showLeaderBoardFn : <div>No leaderboard yet!</div>}
        </>
    )
}

export default FinishOnline;





/// Send message to socket -> socket stores all scores -> sends back scores once all scores are in
