import { default as Finish } from ".";
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
          <Finish />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toMatch(/finish/i);
  });
  test("it renders", () => {
    render(
      <Provider store={store}>
        <Router>
          <Finish />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("button", {
      name: /home/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
