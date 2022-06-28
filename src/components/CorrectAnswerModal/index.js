import React, { useState } from 'react';

import style from './style.module.css';

const CorrectAnswerModal = ({ CAVisibility, setCAVisibility }) => {
    return (
        <div className="CAModal" style={{ visibility: CAVisibility }}>
            This is the correct answer!!!
        </div>
    );
};

export default CorrectAnswerModal;
