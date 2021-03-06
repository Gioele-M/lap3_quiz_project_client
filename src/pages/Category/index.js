import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import brain from "../../Images/brain.png";

const Category = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const statePlayers = useSelector((state) => state.players);

  const handleCategory = (e) => {
    let newCategory = 0;
    const selectedCategory = e.target.textContent;
    if (selectedCategory === "General Knowledge") {
      newCategory = 9;
    } else if (selectedCategory === "Science & Nature") {
      newCategory = 17;
    } else if (selectedCategory === "Sports") {
      newCategory = 21;
    } else if (selectedCategory === "History") {
      newCategory = 23;
    } else if (selectedCategory === "Animals") {
      newCategory = 27;
    }
    dispatch({ type: "SET CATEGORY", payload: newCategory });
    dispatch({ type: "SET CATEGORY DESCRIPTION", payload: selectedCategory });
    navigate("/difficulty");
  };

  const [categoryIdNumbers, setCategoryIdNumbers] = useState([1, 2, 3, 4, 5]);
  const [categoryDirection, setCategoryDirection] = useState("");

  const categoryLeftButton = () => {
    // console.log('go left')
    setCategoryDirection("left");
    let newOrder = [];
    for (let i = categoryIdNumbers.length - 1; i >= 0; i--) {
      if (categoryIdNumbers[i] === 1) {
        newOrder.unshift((categoryIdNumbers[i] = 5));
      } else {
        newOrder.unshift((categoryIdNumbers[i] -= 1));
      }
    }
    setCategoryIdNumbers(newOrder);
  };
  const categoryRightButton = () => {
    setCategoryDirection("right");
    let newOrder = [];
    for (let i = categoryIdNumbers.length - 1; i >= 0; i--) {
      if (categoryIdNumbers[i] === 5) {
        newOrder.unshift((categoryIdNumbers[i] = 1));
      } else {
        newOrder.unshift((categoryIdNumbers[i] += 1));
      }
    }
    setCategoryIdNumbers(newOrder);
  };
  return (
    <>
      <h1 className="selectionH1">Select your category</h1>
      <div className="sliderContainer" data-testid="slider">
        <button className="btn btn-next" onClick={categoryLeftButton}>
        </button>
        <div className="slider">
          <div
            data-testid="GK"
            className={"slide genKno categorySlide " + categoryDirection}
            id={"categorySlide" + categoryIdNumbers[0]}
            onClick={handleCategory}
          >
            <h2>General</h2>
          </div>
          <div
            data-testid="Science & Nature"
            className={"slide science categorySlide " + categoryDirection}
            id={"categorySlide" + categoryIdNumbers[1]}
            onClick={handleCategory}
          >
            <h2>Science</h2>
          </div>
          <div
            data-testid="Sports"
            className={"slide sports categorySlide " + categoryDirection}
            id={"categorySlide" + categoryIdNumbers[2]}
            onClick={handleCategory}
          >
            <h2>Sports</h2>
          </div>
          <div
            data-testid="History"
            className={"slide history categorySlide " + categoryDirection}
            id={"categorySlide" + categoryIdNumbers[3]}
            onClick={handleCategory}
          >
            <h2>History</h2>
          </div>
          <div
            data-testid="Animals"
            className={"slide animals categorySlide " + categoryDirection}
            id={"categorySlide" + categoryIdNumbers[4]}
            onClick={handleCategory}
          >
            <h2>Animals</h2>
          </div>
        </div>
        <button className="btn btn-prev" onClick={categoryRightButton}>
        </button>
      </div>
      <div className="buttonsNSelections">
        <div className="backButtonDiv">
          <button className="backButton" onClick={() => navigate("/numplayers")}>Go back</button>
      </div>
      <div className="selections">
        <p>Selections</p>
        <ul>
          <li>Players: {statePlayers}</li>
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

export default Category;
