import { default as HighScoreModal } from ".";
import { default as Home } from "../../pages/Home";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';

describe("Category", () => {
  const hsModalVisibility = "visible"
  const hsUsernames = ["username1", "username2", "username3"]
  const setHsModalVisibility = ""
  const highScoreModal = (
    <Provider store={store}>
      <Router>
        <HighScoreModal hsModalVisibility={hsModalVisibility}
                hsUsernames={hsUsernames}
                setHsModalVisibility={setHsModalVisibility}/>
      </Router>
    </Provider>
  );
  const home = (
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  )

  test("it renders the h1 'category' ", () => {
    render(highScoreModal);
    const div = screen.queryByTestId(/HighScoreModal/i);
    expect(div).toBeTruthy();
  });

  test('Opens hs modal on click', () => {
    const openHsModal = jest.fn()
    render(<div data-testid="highscoreTitle" className="highScores" onClick={openHsModal}>
    <h2>High Scores</h2>
</div>)
    fireEvent.click(screen.getByTestId("highscoreTitle"))
    expect(openHsModal).toHaveBeenCalledTimes(1)
  })

  test('Closes hs modal on click', () => {
    const closeHsModal = jest.fn()
    render(<p data-testid="cross" className="cross" onClick={closeHsModal}>
    X
  </p>)
    fireEvent.click(screen.getByTestId("cross"))
    expect(closeHsModal).toHaveBeenCalledTimes(1)
  })

  test("modal should be visible", () => {
    render(highScoreModal)
    const div = screen.queryByTestId("HighScoreModal");
    expect(div.style.visibility).toBe("visible");
  })

  test("modal should close on click", () => {
    render(highScoreModal)
    const div = screen.queryByTestId("HighScoreModal");
    // const cross = screen.queryByTestId("cross");
    const closeHsModal = jest.fn()
    const {container} = render(<p data-testid="cross" className="cross" onClick={closeHsModal}>
    X
  </p>)
    
    fireEvent.click(container)
    expect(div.style.visibility).toBe("hidden")
  })

});
