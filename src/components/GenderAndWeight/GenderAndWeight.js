import React from 'react';
import './GenderAndWeight.css';

class GenderAndWeight extends React.Component {
    state = {
        nextStep: 2,
        coefGender: [0.7, 0.6],
        isGender: false,
        isWeight: false
    };

    render() {
    return (
        <div className="gender_wrapper">
            <h2 className="text">Выбрать пол</h2>
            <div className="gender_images_wrapper">
                <button onClick={(e) => { 
                    e.preventDefault();
                    this.props.updateСoefGender(this.state.coefGender[0]);
                    this.setState({ isGender: true });
                }}
                className="gender_image_button"><img src="/male.png" alt="Мужчина" className="gender_image" /></button>
                <button onClick={(e) => { 
                    e.preventDefault();
                    this.props.updateСoefGender(this.state.coefGender[1]);
                    this.setState({ isGender: true });
                }}
                className="gender_image_button"><img src="/female.png" alt="Женщина" className="gender_image" /></button>
            </div>
            <h2 className="text weight_title">Ваш вес</h2>
            <div className="weight_wrapper">
                <input type="number" 
                onChange={this.props.updateWeight} 
                value={this.state.weight}
                className="input" 
                onClick={(e) => { 
                    e.preventDefault();
                    this.setState({ isWeight: true });
                }}
                />
                <button onClick={(e) => { 
                    e.preventDefault();
                    this.props.updateStep(this.state.nextStep);
                }}
                type="submit"
                className="button"
                disabled={
                    !this.state.isGender ||
                    !this.state.isWeight || 
                    this.props.weight === 0
                }>Далее</button>
            </div>
        </div>
    );
    }
}

export default GenderAndWeight;