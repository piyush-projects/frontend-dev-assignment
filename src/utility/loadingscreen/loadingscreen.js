import React from 'react';
import LoadingSpinner from "images/loading.gif";
import './loadingscreen.scss';

const LoadingScreen = ({ size = 'l' }) => (
  <div className="LoadingScreen">
    {size === 's' && <img src={LoadingSpinner} id="loader" alt="Loading..." style={{ height: '25px', width: '25px' }} />}
    {size === 'l' && <img src={LoadingSpinner} id="loader" alt="Loading..." />}
  </div>
);
export default LoadingScreen;
