import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginComponent = ({ props }) => {
    // const [hasAccount, setHasAccount] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignIn = async (e) => {
        const backendUrl = 'https://red-devils-quiz.herokuapp.com/';
        const route = 'auth/login';
        e.preventDefault();
        try {
            if (username === '' || password === '') {
                setError('Missing username or password!');
            } else {
                const response = await axios.post(
                    `${backendUrl}${route}`,
                    JSON.stringify({ username, password }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        // withCredentials: true,
                    }
                );
                dispatch({ type: 'SET USER', payload: response.data.user });
                navigate('/home');
            }
            setUsername('');
            setPassword('');
        } catch (err) {
            if (!err?.response) {
                setError('No server response!');
            } else if (err.response?.status === 401) {
                setError(
                    'Unauthorized! Create an account or check your username and password!'
                );
            } else {
                setError('Login failed!');
            }
        }
    };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

    return (
        <>
            <h1>Fun quiz game - test your knowledge</h1>
            <div>{error}</div>
            <form aria-label="login" onSubmit={handleSignIn}>
                <h2>Login</h2>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    autoFocus
                    placeholder="Enter your username"
                    value={username}
                    onChange={onUsernameChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    autoFocus
                    placeholder="Enter your password"
                    value={password}
                    onChange={onPasswordChange}
                />
                <button onClick={handleSignIn}>Sign in</button>
                <button onClick={() => navigate('/register')}>
                    Create an account
                </button>
            </form>
        </>
    );
};

export default LoginComponent;
