import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import brain from "../../Images/brain.png";

const NumPlayers = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAmount = (e) => {
    let newPlayers = e.target.textContent;
    let newAmount = newPlayers * 5;
    dispatch({ type: "SET AMOUNT", payload: newAmount });
    dispatch({ type: "SET PLAYERS", payload: newPlayers });
    navigate("/category");
  };

  const [playersIdNumbers, setPlayersIdNumbers] = useState([1, 2, 3, 4]);
  const [playersDirection, setPlayersDirection] = useState("");

  const playerLeftButton = () => {
    setPlayersDirection("left");
    let newOrder = [];
    for (let i = playersIdNumbers.length - 1; i >= 0; i--) {
      if (playersIdNumbers[i] === 1) {
        newOrder.unshift((playersIdNumbers[i] = 4));
      } else {
        newOrder.unshift((playersIdNumbers[i] -= 1));
      }
    }
    setPlayersIdNumbers(newOrder);
  };
  const playerRightButton = () => {
    setPlayersDirection("right");
    let newOrder = [];
    for (let i = playersIdNumbers.length - 1; i >= 0; i--) {
      if (playersIdNumbers[i] === 4) {
        newOrder.unshift((playersIdNumbers[i] = 1));
      } else {
        newOrder.unshift((playersIdNumbers[i] += 1));
      }
    }
    setPlayersIdNumbers(newOrder);
  };
  return (
    <>
      <h1 className="selectionH1" >Select number of players</h1>
      <div className="sliderContainer">
      <div className="btnNextDiv">
        <button className="btn btn-next" onClick={playerLeftButton}></button>
      </div>
        <div className="slider">
          <div
            data-testid="number"
            className={"slide numSlide numOne " + playersDirection}
            id={"playerSlide" + playersIdNumbers[0]}
            onClick={handleAmount}
          >
            <h2>1</h2>
          </div>
          <div
            className={"slide numSlide numTwo " + playersDirection}
            id={"playerSlide" + playersIdNumbers[1]}
            onClick={handleAmount}
          >
            <h2>2</h2>
          </div>
          <div
            className={"slide numSlide numThree " + playersDirection}
            id={"playerSlide" + playersIdNumbers[2]}
            onClick={handleAmount}
          >
            <h2>3</h2>
          </div>
          <div
            className={"slide numSlide numFour " + playersDirection}
            id={"playerSlide" + playersIdNumbers[3]}
            onClick={handleAmount}
          >
            <h2>4</h2>
          </div>
        </div>
        <div className="btnPrevDiv">
         <button className="btn btn-prev" onClick={playerRightButton}></button> 
        </div>
      </div>
      <div className="buttonsNSelections">
        <div className="backButtonDiv">
        <button className="backButton" onClick={() => navigate("/home")}>Go back</button> 
        </div>
        <div className="selections" style={{ visibility: "hidden" }}>
          <p>Selections</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="selectionBrainDiv">
        <img src={brain} className="selectionBrain" alt="Brain logo"/>
      </div>
    </>
  );
};

export default NumPlayers;
