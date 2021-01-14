import React from 'react';
import './Drink.css';

class Drink extends React.Component {
    state = {
        nextStep: 3,
        prevStep: 1,
        isPercent: false,
        isSize: false
    };

    render() {
        return (
            <div className="drink_wrapper">
                <h2 className="text">% алкоголя</h2>
                <input type="number" 
                onChange={this.props.updatePercent} 
                className="input" 
                onClick={(e) => { 
                    e.preventDefault();
                    this.setState({ isPercent: true });
                }} 
                />
                <h2 className="text drink_title">Было выпито в мл</h2>
                <input type="number" 
                onChange={this.props.updateSize} 
                className="input" 
                onClick={(e) => { 
                    e.preventDefault();
                    this.setState({ isSize: true });
                }} 
                />
                <img alt="" src="/wait.png" className="drink_img"/>
                <div className="buttons_wrapper">
                    <button onClick={(e) => { 
                        e.preventDefault();
                        this.props.updateStep(this.state.prevStep);
                    }}
                    className="button button_first button_drink">Назад</button>
                    <button onClick={(e) => { 
                        e.preventDefault();
                        this.props.getResult();
                        this.props.updateStep(this.state.nextStep);
                    }}
                    className="button button_drink"
                    disabled={
                        !this.state.isPercent ||
                        !this.state.isSize || 
                        this.props.percent === 0 || 
                        this.props.size === 0
                    }>Рассчитать</button>
                </div>
            </div>
        );
    }
}

export default Drink;