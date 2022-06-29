import { default as Header } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("Header", () => {
  const correct = (
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );

  test("it renders the h1 'Header' ", () => {
    render(correct);
    const div = screen.getByText(/Header/i);
    expect(div).toBeTruthy();
  });
});
