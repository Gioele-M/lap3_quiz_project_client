import { default as SignUp } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

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
});
