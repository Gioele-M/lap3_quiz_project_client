import { default as Category } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("Category", () => {
  const navigate = jest.fn();
  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });
  const category = (
    <Provider store={store}>
      <Router>
        <Category />
      </Router>
    </Provider>
  );

  test("it renders the h1 'category' ", () => {
    render(category);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toMatch(/category/i);
  });
  test("it renders button 'go back' ", () => {
    render(category);
    const heading = screen.getByRole("button", {
      name: /go back/i,
    });
    expect(heading).toBeInTheDocument();
  });
  test("it renders the button 'Go to difficulty selection' ", () => {
    render(category);
    const heading = screen.getByRole("button", {
      name: /Go to difficulty selection/i,
    });
    expect(heading).toBeInTheDocument();
  });
  test("it renders the div 'slider' ", () => {
    render(category);
    const div = screen.queryByTestId("slider");
    expect(div).toBeTruthy();
  });

  test("it navigates from button to /numplayers ", () => {
    render(category);
    const button = screen.getByRole("button", {
      name: /go back/i,
    });
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith("/numplayers");
  });

  test("it navigates from button to /difficulty ", () => {
    render(category);
    const button = screen.getByRole("button", {
      name: /Go to difficulty selection/i,
    });
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith("/difficulty");
  });

  test("if select category (General Knowledge) works and naviagtes to difficulty", () => {
    render(category);
    const div = screen.queryByTestId("GK");
    fireEvent.click(div);
    expect(navigate).toHaveBeenCalledWith("/difficulty");
  });

  test("if select category (Science & Nature) works and naviagtes to difficulty", () => {
    render(category);
    const div = screen.queryByTestId("Science & Nature");
    fireEvent.click(div);
    expect(navigate).toHaveBeenCalledWith("/difficulty");
  });

  test("if select category (Sports) works and naviagtes to difficulty", () => {
    render(category);
    const div = screen.queryByTestId("Sports");
    fireEvent.click(div);
    expect(navigate).toHaveBeenCalledWith("/difficulty");
  });

  test("if select category (History) works and naviagtes to difficulty", () => {
    render(category);
    const div = screen.queryByTestId("History");
    fireEvent.click(div);
    expect(navigate).toHaveBeenCalledWith("/difficulty");
  });

  test("if select category (Animals) works and naviagtes to difficulty", () => {
    render(category);
    const div = screen.queryByTestId("Animals");
    fireEvent.click(div);
    expect(navigate).toHaveBeenCalledWith("/difficulty");
  });

  test("it navigates from button to /difficulty ", () => {
    render(category);
    const button = screen.getByRole("button", {
      name: /Left/i,
    });
    const GK = screen.queryByTestId("GK");
    fireEvent.click(button);
    expect(GK.classList).toContain("left");
  });

  test("it navigates from button to /difficulty ", () => {
    render(category);
    const button = screen.getByRole("button", {
      name: /Right/i,
    });
    const GK = screen.queryByTestId("GK");
    fireEvent.click(button);
    expect(GK.classList).toContain("right");
  });
});
