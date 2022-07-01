import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
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
            <div className="introText">
                <h2 className="introLine1">Fun quiz game</h2>
                <h2>Will you be dumbfounded?</h2>
            </div>
            <div>{error && error}</div>
            <form aria-label="login" className="registerForm"onSubmit={handleSignUp}>
                <h2 className="registerHeader">Create Account</h2>
                <label htmlFor="username" className="signUsernameLabel">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    autoFocus
                    placeholder="Enter your username"
                    value={username}
                    onChange={onUsernameChange}
                    data-testid="usernameInput"
                    className="signUsername"
                />
                <label htmlFor="email" className="signEmailLabel">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoFocus
                    placeholder="Enter your email"
                    value={email}
                    onChange={onEmailChange}
                    data-testid="emailInput"
                    className="signEmail"
                />
                <label htmlFor="password" className="signPasswordLabel">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    autoFocus
                    placeholder="Enter your password"
                    value={password}
                    onChange={onPasswordChange}
                    data-testid="passwordInput"
                    className="signPassword"
                />
                <label htmlFor="confirmPassword" className="confirmPasswordLabel">Confirm password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    autoFocus
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={onConfirmPasswordChange}
                    data-testid="confirmPasswordInput"
                    className="confirmPasswordInput"
                />
                <button className="signUp">Sign up</button>
                <button className="haveAccount" data-testid="button1" onClick={() => navigate('/')}>
                    Have an account?
                </button>
            </form>
        </>
    );
};

export default SignUp;
