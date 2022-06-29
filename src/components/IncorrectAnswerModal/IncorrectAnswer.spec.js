import { default as IncorrectAnswerModal } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("IncorrectAnswerModal", () => {
  const correct = (
    <Provider store={store}>
      <Router>
        <IncorrectAnswerModal />
      </Router>
    </Provider>
  );

  test("it renders the div ", () => {
    render(correct);
    const div = screen.queryByTestId(/IncorrectAnswerModal/i);
    expect(div).toBeTruthy();
  });
});
