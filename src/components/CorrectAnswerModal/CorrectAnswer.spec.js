import { default as CorrectAnswerModal } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("Category", () => {
  const correct = (
    <Provider store={store}>
      <Router>
        <CorrectAnswerModal />
      </Router>
    </Provider>
  );

  test("it renders the h1 'category' ", () => {
    render(correct);
    const div = screen.getByText(/this is the correct answer!!!/i);
    expect(div).toBeTruthy();
  });
});
