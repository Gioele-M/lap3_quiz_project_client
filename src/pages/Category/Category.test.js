import { default as Category } from ".";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe.only("Category", () => {
  test("it renders a", () => {
    render(
      <Provider store={store}>
        <Router>
          <Category />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toMatch(/category/i);
  });
  test("it renders b ", () => {
    render(
      <Provider store={store}>
        <Router>
          <Category />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("button", {
      name: /go back/i,
    });
    expect(heading).toBeInTheDocument();
  });
  test("it renders c", () => {
    render(
      <Provider store={store}>
        <Router>
          <Category />
        </Router>
      </Provider>
    );
    const heading = screen.getByRole("button", {
      name: /Go to difficulty selection/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
