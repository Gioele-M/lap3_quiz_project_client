import { default as LoginComponent } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("Login", () => {
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

  test("it renders the button 'Go to difficulty home' ", () => {
    render(correct);
    const button = screen.getByRole("button", {
      name: /Sign in/i,
    });
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith("/home");
  });

  test("it renders the button 'Go to register' ", () => {
    render(correct);
    const button = screen.getByRole("button", {
      name: /Create an account/i,
    });
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith("/register");
  });
});
