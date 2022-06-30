import { default as Quiz } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("Quiz", () => {
  const navigate = jest.fn();
  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });
  const quiz = (
    <Provider store={store}>
      <Router>
        <Quiz />
      </Router>
    </Provider>
  );
  test("it renders", () => {
    render(quiz);
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toMatch(/quiz/i);
  });
  test("it renders", () => {
    render(quiz);
    const heading = screen.getByRole("button", {
      name: /Finish quiz/i,
    });
    expect(heading).toBeInTheDocument();
  });
  test("it navigates the button to category ", () => {
    render(quiz);
    const button = screen.getByRole("button", {
      name: /Finish quiz/i,
    });
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith("/finish");
  });

  // test("it navigates the button to category ", () => {
  //   render(quiz);
  //   const button = screen.getByRole("button", {
  //     name: /Finish quiz/i,
  //   });
  //   fireEvent.click(button);
  //   expect(navigate).toHaveBeenCalledWith("/finishonline");
  // });
});
