import React from 'react';

import style from './style.module.css';

const IncorrectAnswerModal = ({ NCAVisibility, setNCAVisibility }) => {
    return (
        <div className="NCAModal" style={{ visibility: NCAVisibility }}>
            Oops, that was a wrong answer!
        </div>
    );
};

export default IncorrectAnswerModal;
