import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const user = useSelector((state) => state.user);
    const results = useSelector((state) => state.results);
    const dispatch = useDispatch();

    let navigate = useNavigate();

    console.log('BEFORE', user);
    console.log('BEFORE', results);
    const handleSignout = () => {
        dispatch({ type: 'LOAD_RESULTS', payload: [] });
        dispatch({ type: 'SET USER', payload: '' });
        navigate('/');
    };
    console.log('AFTER', results);
    console.log('AFTER', user);

    return <button onClick={handleSignout}>Sign out</button>;
};

export default LogoutButton;
