import { default as Quiz } from ".";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("Quiz", () => {
  test("it renders", () => {
    render(
      <Provider store={store}>
        <Router>
          <Quiz />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toMatch(/quiz/i);
  });
  test("it renders", () => {
    render(
      <Provider store={store}>
        <Router>
          <Quiz />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("button", {
      name: /Finish quiz/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
