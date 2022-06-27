import React, {useState} from 'react'

const HighScoreModal = ({hsModalVisibility, setHsModalVisibility, hsUsernames}) => {
    // console.log(hsUsernames)

    const closeHsModal = () => {
        setHsModalVisibility('hidden')
    }
    return (
        <div className="hsModal" style={{visibility: hsModalVisibility}}>
            <h2>High Scores</h2>
            <p className="cross" onClick={closeHsModal}>X</p>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Quizzes</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{hsUsernames[0].username}</td>
                        <td>{hsUsernames[0].quizzes}</td>
                        <td>{hsUsernames[0].points}</td>
                    </tr>
                    <tr>
                        <td>{hsUsernames[1].username}</td>
                        <td>{hsUsernames[1].quizzes}</td>
                        <td>{hsUsernames[1].points}</td>
                    </tr>
                    <tr>
                        <td>{hsUsernames[2].username}</td>
                        <td>{hsUsernames[2].quizzes}</td>
                        <td>{hsUsernames[2].points}</td>
                    </tr>
                    <tr>
                        <td>{hsUsernames[3].username}</td>
                        <td>{hsUsernames[3].quizzes}</td>
                        <td>{hsUsernames[3].points}</td>
                    </tr>
                    <tr>
                        <td>{hsUsernames[4].username}</td>
                        <td>{hsUsernames[4].quizzes}</td>
                        <td>{hsUsernames[4].points}</td>
                    </tr>
                    <tr>
                        <td>{hsUsernames[5].username}</td>
                        <td>{hsUsernames[5].quizzes}</td>
                        <td>{hsUsernames[5].points}</td>
                    </tr>
                    <tr>
                        <td>{hsUsernames[6].username}</td>
                        <td>{hsUsernames[6].quizzes}</td>
                        <td>{hsUsernames[6].points}</td>
                    </tr>
                    <tr>
                        <td>{hsUsernames[7].username}</td>
                        <td>{hsUsernames[7].quizzes}</td>
                        <td>{hsUsernames[7].points}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}

export default HighScoreModal;