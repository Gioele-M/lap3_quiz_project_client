import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { HighScoreModal, LogoutButton } from '../../components';
import { fetchRankingQuestions } from '../../actions';
import brain from '../../Images/brain.png';

import axios from 'axios';

const Home = () => {
    const [hsModalVisibility, setHsModalVisibility] = useState('hidden');
    const [hsUsernames, setHsUsernames] = useState([
        // {username: "bob123", quizzes: 10, points: 12},
        // {username: "tina123", quizzes: 9, points: 9},
        // {username: "louise123", quizzes: 8, points: 9},
        // {username: "gene123", quizzes: 7, points: 6},
        // {username: "linda123", quizzes: 6, points: 5},
        // {username: "teddy456", quizzes: 5, points: 5},
        // {username: "mort456", quizzes: 4, points: 4},
        // {username: "jimmy666", quizzes: 1, points: 1}
    ]);
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchHighScores = async () => {
        const { data } = await axios.get(
            'https://red-devils-quiz.herokuapp.com/leaderboard'
        );
        console.log(data);
        setHsUsernames(data);
    };
    const openHsModal = () => {
        setHsModalVisibility('visible');
        fetchHighScores();
    };
    const user = useSelector((state) => state.user);
    console.log(user);

    // const players = useSelector((state) => state.players);

    const handleLocalClick = () => {
        dispatch({ type: 'SET MODE', payload: 'local' });
        navigate('/numplayers');
    };

    const handleOnlineClick = () => {
        dispatch({ type: 'SET MODE', payload: 'online' });
        navigate('/quiz');
    };

    const getRankingQuestions = () => dispatch(fetchRankingQuestions());

    const handleRankClick = () => {
        dispatch({ type: 'SET AMOUNT', payload: '10' });
        dispatch({ type: 'SET PLAYERS', payload: '1' });
        dispatch({ type: 'SET MODE', payload: 'rank' });
        getRankingQuestions();
        navigate('/quiz');
    };
    return (
        <>
            <div className="hsArea">
                <div className="highScores" onClick={openHsModal}>
                    <h2>High Scores</h2>
                </div>
                <HighScoreModal
                    hsModalVisibility={hsModalVisibility}
                    hsUsernames={hsUsernames}
                    setHsModalVisibility={setHsModalVisibility}
                />
            </div>

            <div className="homeBrainDiv">
                <img src={brain} className="homeBrain" />
            </div>

            <h1 className="dumbfounded">Dumbfounded?</h1>
            <div className="gameTypes">
                <div
                    data-testid="local"
                    className="localGame"
                    onClick={() => handleLocalClick()}
                >
                    <h2>Local game</h2>
                </div>

                <div
                    data-testid="online"
                    className="onlineGame"
                    onClick={() => handleOnlineClick()}
                >
                    <h2>Online game</h2>
                </div>
                <div
                    data-testid="rank"
                    className="rankingGame"
                    onClick={() => handleRankClick()}
                >
                    <h2>Start ranking game</h2>
                </div>
            </div>

            {/* <button onClick={()=>navigate("/numplayers")}>Go to game setup</button> */}
        </>
    );
};

export default Home;
