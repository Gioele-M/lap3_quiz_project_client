import { default as QuizForm } from ".";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("QuizForm", () => {
  const correct = (
    <Provider store={store}>
      <Router>
        <QuizForm />
      </Router>
    </Provider>
  );

  test("the div doesn't render right away ", async () => {
    render(correct);
    const div = screen.queryByTestId(/quizArea/i);
    expect(div).not.toBeInTheDocument();
  });


});
