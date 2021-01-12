import React from 'react';
import './Result.css';

class Result extends React.Component {
    state = {
        nextStep: 1
    };

    render() {
        return (
            <div className="result_wrapper">
                <h2 className="text result_text">Алкоголь выведется через {this.props.result} часов</h2>
                <img alt="" src="/logo.png" className="result_img"/>
                <button onClick={(e) => { 
                    e.preventDefault();
                    this.props.updateStep(this.state.nextStep);
                }}
                className="button">Рассчитать заново</button>
            </div>
        );
    }
}

export default Result;