import { default as Difficulty } from ".";
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
          <Difficulty />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toMatch(/difficulty/i);
  });
  test("it renders", () => {
    render(
      <Provider store={store}>
        <Router>
          <Difficulty />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("button", {
      name: /go back/i,
    });
    expect(heading).toBeInTheDocument();
  });
  test("it renders", () => {
    render(
      <Provider store={store}>
        <Router>
          <Difficulty />
        </Router>
      </Provider>
    );
    const button = screen.getByRole("button", {
      name: /Right/i,
    });
    expect(button).toBeInTheDocument();
  });
});
