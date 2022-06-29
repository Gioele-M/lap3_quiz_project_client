import { default as Footer } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("Footer", () => {
  const correct = (
    <Provider store={store}>
      <Router>
        <Footer />
      </Router>
    </Provider>
  );

  test("it renders the h1 'Footer' ", () => {
    render(correct);
    const div = screen.getByText(/Footer/i);
    expect(div).toBeTruthy();
  });
});