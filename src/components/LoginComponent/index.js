import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginComponent = ({ props }) => {
  // const [hasAccount, setHasAccount] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSignIn = (e) => {
    //TODO: log the user in and then navigate them to home
    e.preventDefault();
    setUsername("");
    setPassword("");
    navigate("/home");
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
      <form data-testid="form" aria-label="login" onSubmit={handleSignIn}>
        <h2>Login</h2>
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
        <button onClick={handleSignIn}>Sign in</button>
        <button onClick={() => navigate("/register")}>Create an account</button>
      </form>
    </>
  );
};

export default LoginComponent;
