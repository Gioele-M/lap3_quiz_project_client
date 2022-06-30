import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const dispatch = useDispatch();

    let navigate = useNavigate();

    const handleSignout = () => {
        dispatch({ type: 'LOAD_RESULTS', payload: [] });
        dispatch({ type: 'SET USER', payload: '' });
        navigate('/');
    };

    return <button onClick={handleSignout}>Sign out</button>;
};

export default LogoutButton;
