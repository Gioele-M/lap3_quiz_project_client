import React from 'react';

import style from './index.module.css';

const CorrectAnswerModal = ({ CAVisibility }) => {
    return (
        <div className={style.CAModal} style={{ visibility: CAVisibility }}>
            This is the correct answer!!!
        </div>
    );
};

export default CorrectAnswerModal;
