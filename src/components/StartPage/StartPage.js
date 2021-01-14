import React from 'react';
import './StartPage.css';

class StartPage extends React.Component {
    state = {
        nextStep: 1
    };

    render() {
        setTimeout(function(){
            this.props.updateStep(this.state.nextStep);
        }.bind(this), 2500);
        return (
            <div className="start_wrapper"
            onClick={(e) => { 
                e.preventDefault();
                this.props.updateStep(this.state.nextStep);
            }}>
                <h1>Не<br />в<br />салат</h1>
                <img alt="" src='/logo.png' className="start_img" />
                <p className="text start_warning">Чрезмерное употребление алкоголя вредит Вашему здоровью</p>
            </div>
        );
    }
}

export default StartPage;