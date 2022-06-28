import React from 'react';

import style from './index.module.css';

const IncorrectAnswerModal = ({ NCAVisibility }) => {
    return (
        <div className={style.NCAModal} style={{ visibility: NCAVisibility }}>
            Oops, that was a wrong answer!
        </div>
    );
};

export default IncorrectAnswerModal;
