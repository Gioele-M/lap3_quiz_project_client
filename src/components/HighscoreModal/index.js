import React from "react";

const HighScoreModal = ({
  hsModalVisibility,
  setHsModalVisibility,
  hsUsernames,
}) => {
  // console.log(hsUsernames)

  const closeHsModal = () => {
    setHsModalVisibility("hidden");
  };

  const renderedHighScores = hsUsernames.map((score, i) => {
    return (
      <tr key={i}>
        <td className="hsTableData">{score.username}</td>
        <td className="hsTableData">{score.total}</td>
        <td className="hsTableData">{score.percentage * score.total}</td>
      </tr>
    );
  });

  return (
    <div
      data-testid="HighScoreModal"
      className="hsModal"
      style={{ visibility: hsModalVisibility }}
    >
      <p data-testid="cross" className="cross" onClick={closeHsModal}>
        X
      </p>
      <table className="hsTable">
        <thead>
          <tr>
            <th>Username</th>
            <th>Quizzes</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody className="hsTableBody">{renderedHighScores}</tbody>
      </table>
    </div>
  );
};

export default HighScoreModal;
