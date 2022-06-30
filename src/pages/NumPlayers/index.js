import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const NumPlayers = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // const players = useSelector(state => {
  //     // console.log({ state })
  //     return state.players
  // })

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
    // console.log('go left')
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
    // console.log('go right')
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
      <h1>Select number of players</h1>
      <div className="sliderContainer">
        <button className="btn btn-next" onClick={playerLeftButton}>
          {" "}
          Left{" "}
        </button>
        <div className="slider">
          <div
            data-testid="number"
            className={"slide " + playersDirection}
            id={"playerSlide" + playersIdNumbers[0]}
            onClick={handleAmount}
          >
            <h2>1</h2>
          </div>
          <div
            className={"slide " + playersDirection}
            id={"playerSlide" + playersIdNumbers[1]}
            onClick={handleAmount}
          >
            <h2>2</h2>
          </div>
          <div
            className={"slide " + playersDirection}
            id={"playerSlide" + playersIdNumbers[2]}
            onClick={handleAmount}
          >
            <h2>3</h2>
          </div>
          <div
            className={"slide " + playersDirection}
            id={"playerSlide" + playersIdNumbers[3]}
            onClick={handleAmount}
          >
            <h2>4</h2>
          </div>
        </div>
        <button className="btn btn-prev" onClick={playerRightButton}>
          {" "}
          Right{" "}
        </button>
      </div>
      <button onClick={() => navigate("/home")}>Go back</button>
      <button onClick={() => navigate("/category")}>
        Go to category selection
      </button>
      <div className="selections" style={{ visibility: "hidden" }}>
        <p>Selections</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default NumPlayers;
