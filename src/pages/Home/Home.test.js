import { default as Home } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import * as router from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe.only("Home", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  const home = (
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
  test("it renders", () => {
    render(home);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toMatch(/dumbfounded/i);
  });
  test("it renders", () => {
    render(home);
    const heading = screen.getByRole("heading", {
      name: /High Scores/i,
    });
    expect(heading).toBeInTheDocument();
  });
  test("it renders the div 'local' ", () => {
    render(home);

    const div = screen.getByTestId("local");
    fireEvent.click(div);

    expect(navigate).toHaveBeenCalledWith("/numplayers");
  });
  test("it renders the div 'local' ", () => {
    render(home);

    const div = screen.getByTestId("online");
    fireEvent.click(div);

    expect(navigate).toHaveBeenCalledWith("/quiz");
  });

  test("it renders the div 'local' ", () => {
    render(home);

    const div = screen.getByTestId("rank");
    fireEvent.click(div);

    expect(navigate).toHaveBeenCalledWith("/quiz");
  });
});
