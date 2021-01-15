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
        concentrationInBlood: 0,
        curPureAlcohol: 0
    };

    updateStep = (value) => {
        this.setState({ step: value });
    }

    updateСoefGender = (value) => {
        this.setState({ coefGender: value });
    };

    updateWeight = (e) => {
        this.setState({ weight: parseInt(e.target.value) });
    };

    updatePercent = (e) => {
        this.setState({ percent: parseInt(e.target.value) });
    };

    updateSize = (e) => {
        this.setState({ size: parseInt(e.target.value) });
    };

    updateAll = () => {
        this.setState({ 
            weight: 0,
            percent: 0,
            size: 0,
            result: 0,
            coefGender: 0,
            pureAlcohol: 0,
            concentrationInBlood: 0,
            curPureAlcohol: 0
        });
    }

    getResult = () => {
        const pureAlcohol = this.state.size * this.state.percent / 100;
        let curPureAlcohol = this.state.curPureAlcohol + pureAlcohol;
        const concentrationInBlood = curPureAlcohol / (this.state.coefGender * this.state.weight);

        this.setState({ 
            pureAlcohol: pureAlcohol,
            curPureAlcohol: curPureAlcohol,
            concentrationInBlood: concentrationInBlood,
            result: Math.round(concentrationInBlood / 0.15)
        });
    };

   

    render() {
        if (this.state.step === 0) {
            return (
                <div className="form_wrapper">
                    <StartPage 
                    updateStep={this.updateStep} />
                </div>
            )
        } else if (this.state.step === 1) {
            return (
                <div className="form_wrapper">
                    <GenderAndWeight {...this.state} 
                    updateСoefGender={this.updateСoefGender}
                    updateWeight={this.updateWeight}
                    updateStep={this.updateStep} />
                </div>
            )
        } else if (this.state.step === 2) {
            return (
                <div className="form_wrapper">
                    <Drink {...this.state} 
                    updatePercent={this.updatePercent}
                    updateSize={this.updateSize}
                    getResult={this.getResult}
                    updateStep={this.updateStep} />
                </div>
            )
        } else {
            return (
                <div className="form_wrapper">
                    <Result {...this.state} 
                    updateStep={this.updateStep} 
                    updateAll={this.updateAll} />
                </div>
            )
        }
    }
}

export default FormContainer;