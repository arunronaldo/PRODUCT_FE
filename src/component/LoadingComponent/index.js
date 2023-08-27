/***************Import React packages*******************/
import React from 'react';

/***************Import CSS*******************/
import './loadscreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
        </div>
    );
};

export default LoadingScreen;