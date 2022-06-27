import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    let navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
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
            {/* <button onClick={() => navigate('/home')}>
                        Go to home
                    </button> */}
            <form aria-label="login" onSubmit={handleSignUp}>
                <h2>Create Account</h2>
                <label htmlFor="username"></label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    autoFocus
                    placeholder="Enter your username"
                    value={username}
                    onChange={onUsernameChange}
                />
                <label htmlFor="email"></label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoFocus
                    placeholder="Enter your email"
                    value={email}
                    onChange={onEmailChange}
                />
                <label htmlFor="password"></label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    autoFocus
                    placeholder="Enter your password"
                    value={password}
                    onChange={onPasswordChange}
                />
                <label htmlFor="confirmPassword"></label>
                <input
                    type="confirmPassword"
                    name="confirmPassword"
                    id="confirmPassword"
                    autoFocus
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={onConfirmPasswordChange}
                />
                <button>Sign up</button>
                <p onClick={() => setHasAccount(true)}>
                    Already have an account? Login
                    {console.log(hasAccount)}
                </p>
            </form>
        </>
    );
};

export default SignUp;
