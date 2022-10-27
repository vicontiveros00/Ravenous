import React from 'react';
import Loading from '../../loading.png';
import './LoadingCircle.css';

class LoadingCircle extends React.Component {
    render() {
        return (
            <div className="loading-container">
                <img src={Loading} className="loading-circle" />
            </div>
        )
    }
}

export default LoadingCircle;