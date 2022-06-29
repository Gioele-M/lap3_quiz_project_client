import { default as Finish } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("Finish", () => {
  const navigate = jest.fn();
  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  const finish = (
    <Provider store={store}>
      <Router>
        <Finish />
      </Router>
    </Provider>
  );

  test("it renders the heading ", () => {
    render(finish);
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toMatch(/finish/i);
  });
  test("it renders the button", () => {
    render(finish);
    const button = screen.getByRole("button", {
      name: /home/i,
    });
    expect(button).toBeInTheDocument();
  });

  test("it navigates the button to home ", () => {
    render(finish);
    const button = screen.getByRole("button", {
      name: /Home/i,
    });
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith("/home");
  });
});
