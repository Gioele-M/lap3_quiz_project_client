import { default as SignUp } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';

describe("SignUp", () => {
  const navigate = jest.fn();
  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });
  const correct = (
    <Provider store={store}>
      <Router>
        <SignUp />
      </Router>
    </Provider>
  );

  test("it renders the h1 'category' ", () => {
    render(correct);
    const div = screen.getByText(/Fun quiz game - test you knowledge/i);
    expect(div).toBeTruthy();
  });

  test("it renders the button 'Go to home' ", () => {
    render(correct);
    const button = screen.queryByTestId(/button1/i);
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith("/");
  });

  test('Username should change upon user input', async () => {
    render(correct);
    userEvent.type(screen.getByTestId(/usernameInput/i), 'layla');
    expect(screen.getByTestId(/usernameInput/i)).toHaveValue(
      'layla'
    )
  });
  test('Email should change upon user input', async () => {
    render(correct);
    userEvent.type(screen.getByTestId(/emailInput/i), 'layla');
    expect(screen.getByTestId(/emailInput/i)).toHaveValue(
      'layla'
    )
  });
  test('Password should change upon user input', async () => {
    render(correct);
    userEvent.type(screen.getByTestId("passwordInput"), 'layla');
    expect(screen.getByTestId("passwordInput")).toHaveValue(
      'layla'
    )
  });
  test('Password confirm should change upon user input', async () => {
    render(correct);
    userEvent.type(screen.getByTestId("confirmPasswordInput"), 'layla');
    expect(screen.getByTestId("confirmPasswordInput")).toHaveValue(
      'layla'
    )
  });
});
