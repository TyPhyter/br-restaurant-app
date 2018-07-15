import React, { Component } from 'react';
import './Header.css';
import mapIcon from '../../assets/icons/icon_map@2x.png';

export default class Header extends Component {

    render() {
        return (
            <div className="Header">
                <div className="Header__text">
                    Lunch Tyme
                </div>
                <div className="Header__map-icon" onClick={ this.props.mapIconClickHandler }>
                    <img src={ mapIcon } alt="map icon" />
                </div>
            </div>
        )
    }
}