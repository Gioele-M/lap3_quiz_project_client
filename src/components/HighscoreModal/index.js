import React from 'react'

const HighScoreModal = ({hsModalVisibility, setHsModalVisibility, hsUsernames}) => {
    // console.log(hsUsernames)

    const closeHsModal = () => {
        setHsModalVisibility('hidden')
    }

    const renderedHighScores = hsUsernames.map((score, i) => {
        return (
            <tr key={i}>
                    <td>{score.username}</td>
                    <td>{score.total}</td>
                    <td>{score.percentage * score.total}</td>
            </tr>
        )
    })

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
                    {renderedHighScores}
                </tbody>
            </table>
        </div>
        
    )
}

export default HighScoreModal;