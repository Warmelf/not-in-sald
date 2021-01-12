import React from 'react';
import StartPage from '../StartPage/StartPage';
import GenderAndWeight from '../GenderAndWeight/GenderAndWeight';
import Drink from '../Drink/Drink';
import Result from '../Result/Result';
import './FormContainer.css';

class FormContainer extends React.Component {
    state = {
        step: 0,
        weight: 0,
        percent: 0,
        size: 0,
        result: 0,
        coefGender: 0,
        pureAlcohol: 0,
        concentrationInBlood: 0
    };

    updateStep = (value) => {
        this.setState({ step: value });
        console.log(this.state.step)
    }

    updateСoefGender = (value) => {
        this.setState({ coefGender: value });
        console.log(this.state.coefGender)
    };

    updateWeight = (e) => {
        this.setState({ weight: parseInt(e.target.value) });
        console.log(this.state.weight)
    };

    updatePercent = (e) => {
        this.setState({ percent: parseInt(e.target.value) });
        console.log(this.state.percent)
    };

    updateSize = (e) => {
        this.setState({ size: parseInt(e.target.value) });
        console.log(this.state.size)
    };

    getResult = () => {
        this.setState({ 
            pureAlcohol: this.state.size * this.state.percent / 100,
            concentrationInBlood: this.state.pureAlcohol / (this.state.coefGender * this.state.weight),
            result: Math.round(this.state.concentrationInBlood / 0.15)
        });
        console.log(this.state.result)
    };

    render() {
        return (
            <div className="form_wrapper">
                <form>
                    <StartPage />
                    <GenderAndWeight {...this.state} 
                    updateСoefGender={this.updateСoefGender}
                    updateWeight={this.updateWeight}
                    updateStep={this.updateStep} />
                    <Drink {...this.state} 
                    updatePercent={this.updatePercent}
                    updateSize={this.updateSize}
                    getResult={this.getResult}
                    updateStep={this.updateStep} />
                    <Result {...this.state} 
                    updateStep={this.updateStep} />
                </form>
            </div>
        );
    }
}

export default FormContainer;