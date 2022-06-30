import { default as NumPlayers } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("NumPlayers", () => {
  const navigate = jest.fn();
  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  const num = (
    <Provider store={store}>
      <Router>
        <NumPlayers />
      </Router>
    </Provider>
  );

  test("it renders the heading", () => {
    render(num);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toMatch(/number of players/i);
  });

  test("it navigates the button to home ", () => {
    render(num);
    const button = screen.getByRole("button", {
      name: /Go back/i,
    });
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith("/home");
  });

  test("it navigates the button to category ", () => {
    render(num);
    const button = screen.getByRole("button", {
      name: /Go to category selection/i,
    });
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith("/category");
  });

  test("it navigates from button to /difficulty ", () => {
    render(num);
    const button = screen.getByRole("button", {
      name: /Left/i,
    });
    const number = screen.queryByTestId("number");
    fireEvent.click(button);
    expect(number.classList).toContain("left");
  });

  test("it navigates from button to /difficulty ", () => {
    render(num);
    const button = screen.getByRole("button", {
      name: /Right/i,
    });
    const number = screen.queryByTestId("number");
    fireEvent.click(button);
    expect(number.classList).toContain("right");
  });

  test("it navigates from button to /difficulty ", () => {
    render(num);
    const number = screen.queryByTestId("number");
    fireEvent.click(number);
    expect(navigate).toHaveBeenCalledWith("/category");
  });
});
