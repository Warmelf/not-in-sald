import React from 'react';
import './GenderAndWeight.css';

class GenderAndWeight extends React.Component {
    state = {
        nextStep: 2,
        coefGender: [0.7, 0.6],
        isGender: false,
        isWeight: false,
        isActiveMan: true,
        isActiveWoman: true,
    };

    render() {
    return (
        <div className="gender_wrapper">
            <h2 className="text gender_title">Выбрать пол</h2>
            <div className="gender_images_wrapper">
                <button onClick={(e) => { 
                    e.preventDefault();
                    this.props.updateСoefGender(this.state.coefGender[0]);
                    this.setState({ isGender: true });
                    this.setState({ isActiveMan: true });
                    this.setState({ isActiveWoman: false });
                }}
                className={`gender_image_button ${
                    !this.state.isActiveMan ? "opacity" : null
                }`}
                ><img src="/male.png" alt="Мужчина" className="gender_image" /></button>
                <button onClick={(e) => { 
                    e.preventDefault();
                    this.props.updateСoefGender(this.state.coefGender[1]);
                    this.setState({ isGender: true });
                    this.setState({ isActiveMan: false });
                    this.setState({ isActiveWoman: true });
                }}
                className={`gender_image_button ${
                    !this.state.isActiveWoman ? "opacity" : null
                }`}
                ><img src="/female.png" alt="Женщина" className="gender_image" /></button>
            </div>
            <div className="weight_wrapper">
                <div className="weight_content">
                    <h2 className="text weight_title">Ваш вес</h2>
                    <input type="number" 
                    onChange={this.props.updateWeight} 
                    value={this.state.weight}
                    className="input input_gender" 
                    onClick={(e) => { 
                        e.preventDefault();
                        this.setState({ isWeight: true });
                    }}
                    />
                </div>
                <button onClick={(e) => { 
                    e.preventDefault();
                    this.props.updateStep(this.state.nextStep);
                }}
                type="submit"
                className="button button_weight"
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