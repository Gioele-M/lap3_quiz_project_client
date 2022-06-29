import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [hasAccount, setHasAccount] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const backendUrl = 'https://red-devils-quiz.herokuapp.com/';
    const route = 'auth/register';

    let navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            if (
                username === '' ||
                email === '' ||
                password === '' ||
                confirmPassword === ''
            ) {
                setError(
                    'Missing username, password or confirm password field!'
                );
            } else if (password.length < 4) {
                setError('Your password should be at least 5 characters long!');
            } else if (password !== confirmPassword) {
                setError('Make sure password and confirm password match!');
            } else {
                const response = await axios.post(
                    `${backendUrl}${route}`,
                    JSON.stringify({ username, email, password }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        // withCredentials: true,
                    }
                );

                console.log(JSON.stringify(response?.data));
                navigate('/home');
            }
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (err) {
            if (!err?.response) {
                setError('No server response!');
            } else if (err.response?.status === 500) {
                setError(
                    'Request to create a user was not successful! Make sure your passwords match!'
                );
            } else {
                setError('Signing up failed!');
            }
        }
    };

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };
    return (
        <>
            <h1>Fun quiz game - test you knowledge</h1>
            <div>{error && error}</div>
            <form aria-label="login" onSubmit={handleSignUp}>
                <h2>Create Account</h2>
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
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoFocus
                    placeholder="Enter your email"
                    value={email}
                    onChange={onEmailChange}
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
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    autoFocus
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={onConfirmPasswordChange}
                />
                <button>Sign up</button>
                <button onClick={() => navigate('/')}>
                    Already have an account? Login
                </button>
            </form>
        </>
    );
};

export default SignUp;
