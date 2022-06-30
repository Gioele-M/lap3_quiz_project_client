import { default as Difficulty } from ".";
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

  const diff = (
    <Provider store={store}>
      <Router>
        <Difficulty />
      </Router>
    </Provider>
  );
  test("it renders", () => {
    render(diff);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toMatch(/difficulty/i);
  });
  test("it renders", () => {
    render(diff);
    const heading = screen.getByRole("button", {
      name: /go back/i,
    });
    expect(heading).toBeInTheDocument();
  });
  test("it renders", () => {
    render(diff);
    const button = screen.getByRole("button", {
      name: /Right/i,
    });
    expect(button).toBeInTheDocument();
  });

  test("the button left shifts everything left ", () => {
    render(diff);
    const button = screen.getByRole("button", {
      name: /Left/i,
    });
    const GK = screen.queryByTestId("difficulty");
    fireEvent.click(button);
    expect(GK.classList).toContain("left");
  });

  test("the button right shifts everything right ", () => {
    render(diff);
    const button = screen.getByRole("button", {
      name: /Right/i,
    });
    const GK = screen.queryByTestId("difficulty");
    fireEvent.click(button);
    expect(GK.classList).toContain("right");
  });

  test("the button right shifts everything right ", () => {
    render(diff);
    const button = screen.queryByRole("button", {
      name: /Confirm selections/i,
    });
    const div = screen.queryByTestId("difficulty");
    fireEvent.click(div);
    fireEvent.click(button);
  });

  // test("the button right shifts everything right ", () => {
  //   render(diff);
  //   const button = screen.getByRole("button", {
  //     name: /Confirm selections/i,
  //   });
  //   fireEvent.click(button);
  // });
});
