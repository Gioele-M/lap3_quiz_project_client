import React from 'react';

import style from './index.module.css';

const CorrectAnswerModal = ({ CAVisibility }) => {
    return (
        <div className={style.CAModal} 
        style={{ visibility: CAVisibility }}
        >
            <h2>Correct!</h2>
        </div>
    );
};

export default CorrectAnswerModal;
