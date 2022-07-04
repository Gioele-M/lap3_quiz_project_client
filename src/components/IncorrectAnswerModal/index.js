import React from "react";

import style from "./index.module.css";

const IncorrectAnswerModal = ({ NCAVisibility }) => {
  return (
    <div
      data-testid="IncorrectAnswerModal"
      className={style.NCAModal}
      style={{ visibility: NCAVisibility }}
    >
      <h2>Oops, that was a wrong answer!</h2>
    </div>
  );
};

export default IncorrectAnswerModal;
