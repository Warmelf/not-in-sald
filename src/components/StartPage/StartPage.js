import React from 'react';
import './StartPage.css';

class StartPage extends React.Component {
    render() {
        return (
            <div className="start_wrapper">
                <h1>Не<br />в<br />салат</h1>
                <img alt="" src='/logo.png' className="start_img" />
            </div>
        );
    }
}

export default StartPage;