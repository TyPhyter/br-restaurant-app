import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {

    render() {
        return (
            <div className="Header">
                <div className="Header__text">
                    Lunch Tyme
                </div>
                <div className="Header__map-icon"></div>
            </div>
        )
    }
}