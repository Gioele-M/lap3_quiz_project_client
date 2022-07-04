import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HighScoreModal, LogoutButton } from '../../components';
import { fetchRankingQuestions } from '../../actions';
import brain from '../../Images/brain.png';

import axios from 'axios';

const Home = () => {
    const [hsModalVisibility, setHsModalVisibility] = useState('hidden');
    const [hsUsernames, setHsUsernames] = useState([]);
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchHighScores = async () => {
        const { data } = await axios.get(
            'https://red-devils-quiz.herokuapp.com/leaderboard'
        );
        setHsUsernames(data);
    };
    const openHsModal = () => {
        fetchHighScores();
        setHsModalVisibility("visible");
      };

    const handleLocalClick = () => {
        dispatch({ type: 'SET MODE', payload: 'local' });
        navigate('/numplayers');
    };

    const handleOnlineClick = () => {
        dispatch({ type: 'SET MODE', payload: "online" })
        dispatch({ type: 'SET AMOUNT', payload: "10" })
        dispatch({ type: 'SET PLAYERS', payload: "1" }) 
        navigate("/waitingroom")
    }

    const getRankingQuestions = () => dispatch(fetchRankingQuestions());

    const handleRankClick = () => {
        dispatch({ type: "SET RANK LOADING"})
        dispatch({ type: 'SET AMOUNT', payload: '10' });
        dispatch({ type: 'SET PLAYERS', payload: '1' });
        dispatch({ type: 'SET MODE', payload: 'rank' });
        getRankingQuestions();
        navigate('/quiz');
    };
    return (
        <>
            <div className="header">
                <LogoutButton />
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
            </div>
            <div className="homeBrainDiv">
                <img src={brain} className="homeBrain"  alt="Brain logo"/>
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
                    <h2>Ranking game</h2>
                </div>
            </div>
        </>
    );
};

export default Home;
