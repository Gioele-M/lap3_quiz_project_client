import { default as LoginComponent } from ".";
import { screen, render, fireEvent, waitFor, cleanup, getByTestId } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';

// var axios = require("axios");
// var MockAdapter = require("axios-mock-adapter");
// var mock = new MockAdapter(axios);
import React from "react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const user = [
  {
    username: "Gioe",
    email: "email@email.com",
    password: "pass"
  }
];


const axiosInstance = axios.create({
  baseURL: "https://red-devils-quiz.herokuapp.com/",
  timeout: 1000,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

const mock = new MockAdapter(axiosInstance, { onNoMatch: "throwException" });

describe("Login", () => {
  beforeAll(() => {
    mock.reset();
  });
  afterEach(cleanup);
  const navigate = jest.fn();
  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });
  const correct = (
    <Provider store={store}>
      <Router>
        <LoginComponent />
      </Router>
    </Provider>
  );

  test("it sends user to endpoint", async () => {
    mock.onPost("/auth/login").reply(200, {
      msg: "User created",
    });
  })

  test("it renders the h1 ", () => {
    render(correct);
    const div = screen.getByText(/Fun quiz game - test your knowledge/i);
    expect(div).toBeTruthy();
  });

  test("it renders the form ", () => {
    render(correct);
    const div = screen.queryByTestId(/form/i);
    expect(div).toBeTruthy();
  });
  
  
  test("it renders the button 'Go to sign in' ", () => {
    render(correct);
    const button = screen.getByRole("button", {
      name: /Sign in/i,
    });
  });

  test("it renders the button 'Go to sign in' ", () => {
    const handleSignIn = jest.fn()
    render(<button data-testid="signIn" onClick={handleSignIn}>Sign in</button>);
    fireEvent.click(screen.getByText(/Sign in/i))
    expect(handleSignIn).toHaveBeenCalledTimes(1)
  });


  test("it renders the button 'Go to register' ", () => {
    render(correct);
    const button = screen.getByRole("button", {
      name: /Create an account/i,
    });
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith("/register");
  });

  test('the password changes upon input', () => {
    const onPasswordChange = jest.fn()
    const {container} = render(<input type="password" name="password" id="password" autoFocus placeholder="Enter your password" onChange={onPasswordChange}/>)
    const input = container.firstChild
    fireEvent.change(input, {target: {value: 'a'}})
    expect(onPasswordChange).toHaveBeenCalledTimes(1)
    expect(input.value).toBe('a')
  })

  it("App loads with initial state of '", () => {
    const { container } = render(correct);
    const usernameInput = getByTestId(container, "usernameInput");
    expect(usernameInput.textContent).toBe("");
  });

  test('Username should change upon user input', async () => {
    render(correct);
    userEvent.type(screen.getByTestId(/usernameInput/i), 'layla');
    expect(screen.getByTestId(/usernameInput/i)).toHaveValue(
      'layla'
    )
  });

  test('Password should change upon user input', async () => {
    render(correct);
    userEvent.type(screen.getByTestId(/passwordInput/i), 'layla');
    expect(screen.getByTestId(/passwordInput/i)).toHaveValue(
      'layla'
    )
  });
});
