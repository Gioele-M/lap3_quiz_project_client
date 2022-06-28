import { default as NumPlayers } from ".";
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
          <NumPlayers />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toMatch(/number of players/i);
  });
});
