import { default as Home } from ".";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("Category", () => {
  test("it renders", () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toMatch(/dumbfounded/i);
  });
  test("it renders", () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("heading", {
      name: /High Scores/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
