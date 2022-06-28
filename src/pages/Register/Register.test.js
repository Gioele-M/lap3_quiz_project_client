import { default as Register } from ".";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("Register", () => {
  test("it renders", () => {
    render(
      <Provider store={store}>
        <Router>
          <Register />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toMatch(/Fun quiz game - test you knowledge/i);
  });
  test("it renders", () => {
    render(
      <Provider store={store}>
        <Router>
          <Register />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("button", {
      name: /sign up/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
