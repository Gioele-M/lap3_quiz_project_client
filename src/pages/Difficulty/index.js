import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchResults } from "../../actions";
import brain from "../../Images/brain.png";

const Difficulty = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [difficultyLi, setDifficultyLi] = useState("");
  const [confirmationVisibility, setConfirmationVisibility] = useState("hidden");


  const handleDifficulty = (e) => {
    let selectedDifficulty = e.target.textContent;
    setDifficultyLi("Difficulty: " + e.target.textContent);
    let newDifficulty = selectedDifficulty.toLowerCase();
    dispatch({ type: "SET DIFFICULTY", payload: newDifficulty });
    setConfirmationVisibility("visible");
  };

  const [difficultyIdNumbers, setDifficultyIdNumbers] = useState([1, 2, 3]);
  const [difficultyDirection, setDifficultyDirection] = useState("");

  const difficultyLeftButton = () => {
    setDifficultyDirection("left");
    let newOrder = [];
    for (let i = difficultyIdNumbers.length - 1; i >= 0; i--) {
      if (difficultyIdNumbers[i] === 1) {
        newOrder.unshift((difficultyIdNumbers[i] = 3));
      } else {
        newOrder.unshift((difficultyIdNumbers[i] -= 1));
      }
    }
    setDifficultyIdNumbers(newOrder);
  };
  const difficultyRightButton = () => {
    setDifficultyDirection("right");
    let newOrder = [];
    for (let i = difficultyIdNumbers.length - 1; i >= 0; i--) {
      if (difficultyIdNumbers[i] === 3) {
        newOrder.unshift((difficultyIdNumbers[i] = 1));
      } else {
        newOrder.unshift((difficultyIdNumbers[i] += 1));
      }
    }
    setDifficultyIdNumbers(newOrder);
  };
  const stateAmount = useSelector((state) => state.amount);
  const stateCategory = useSelector((state) => state.category);
  const stateDifficulty = useSelector((state) => state.difficulty);
  const statePlayers = useSelector((state) => state.players);
  const stateCategoryDesc = useSelector((state) => state.categoryDesc);

  const getResults = () =>
    dispatch(fetchResults(stateAmount, stateCategory, stateDifficulty));

  const handleConfirmation = (e) => {
    e.preventDefault();
    getResults();
    navigate("/quiz");
  };
  return (
    <>
      <h1 className="selectionH1">Select your difficulty</h1>
      <div className="sliderContainer">
        <button className="btn btn-next" onClick={difficultyLeftButton}>
        </button>
        <div className="slider">
          <div
            data-testid="difficulty"
            className={"slide easy " + difficultyDirection}
            id={"difficultySlide" + difficultyIdNumbers[0]}
            onClick={handleDifficulty}
          >
            <h2>Easy</h2>
          </div>
          <div
            className={"slide medium " + difficultyDirection}
            id={"difficultySlide" + difficultyIdNumbers[1]}
            onClick={handleDifficulty}
          >
            <h2>Medium</h2>
          </div>
          <div
            className={"slide hard " + difficultyDirection}
            id={"difficultySlide" + difficultyIdNumbers[2]}
            onClick={handleDifficulty}
          >
            <h2>Hard</h2>
          </div>
        </div>
        <button className="btn btn-prev" onClick={difficultyRightButton}>
        </button>
      </div>
      <div className="buttonsNSelections">
      <div className="backButtonDiv">
        <button className="backButton" onClick={() => navigate("/category")}>Go back</button>
        </div>
        <div className="confirmSelectionsDiv">
          <button
                className="confirmSelections" onClick={handleConfirmation}
                style={{ visibility: confirmationVisibility }}
              >
                Confirm selections
              </button>
        </div>
              
              <div className="selections">
                <p>Selections</p>
                <ul>
                  <li>Players: {statePlayers}</li>
                  <li>Category: {stateCategoryDesc}</li>
                  <li className="difficultyLi">{difficultyLi}</li>
                </ul>
              </div>
      </div>
      <div className="selectionBrainDiv">
                <img src={brain} className="selectionBrain" alt="Brain logo"/>
      </div>
    </>
  );
};

export default Difficulty;
