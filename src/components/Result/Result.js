import React from 'react';
import './Result.css';

class Result extends React.Component {
    state = {
        nextStep: 1,
        prevStep: 2
    };

    render() {
        return (
            <div className="result_wrapper">
                <h2 className="text result_text">Алкоголь выведется через {this.props.result} {this.props.time}</h2>
                <img alt="" src="/logo.png" className="result_img"/>
                <button onClick={(e) => { 
                    e.preventDefault();
                    this.props.updateStep(this.state.nextStep);
                    this.props.updateAll();
                }}
                className="button button_result but_first">Рассчитать заново</button>
                <button onClick={(e) => { 
                    e.preventDefault();
                    this.props.updateStep(this.state.prevStep);
                }}
                className="button button_result">Выпить еще</button>
            </div>
        );
    }
}

export default Result;