import { default as HighScoreModal } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("Category", () => {
  const highScoreModal = (
    <Provider store={store}>
      <Router>
        <HighScoreModal />
      </Router>
    </Provider>
  );

  test("it renders the h1 'category' ", () => {
    render(highScoreModal);
    const div = screen.queryByTestId(/HighScoreModal/i);
    expect(div).toBeTruthy();
  });
});
