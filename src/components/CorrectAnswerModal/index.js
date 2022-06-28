import React, { useState } from 'react';

const CorrectAnswerModal = ({ CAVisibility, setCAVisibility }) => {
    const closeAnswerModal = () => {
        setCAVisibility('visible');
    };
    return (
        <div className="CAModal" style={{ visibility: CAVisibility }}>
            This is the correct answer!!!
        </div>
    );
};

export default CorrectAnswerModal;
