import React from 'react';
import './Result.css';

class Result extends React.Component {
    state = {
        nextStep: 1,
        prevStep: 2
    };

    getTime = (result) => {
        let check = result % 10;
        if ((result >= 11 && result <= 14) || (check >= 5 && check <= 9) || check === 0) {
            return "часов";
        } else if (check === 1) {
            return "час";
        } else {
            return "часа";
        }
    }

    render() {
        return (
            <div className="result_wrapper">
                <h2 className="text result_text">Алкоголь выведется через {this.props.result} {this.getTime(this.props.result)}</h2>
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