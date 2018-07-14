import React, { Component } from 'react';
import './RestaurantPanel.css';

export default class RestaurantPanel extends Component {

    render() {
        return (
            <div className="RestaurantPanel">
                <img className="RestaurantPanel__image" src="#" />
                <div className="RestaurantPanel__text-content">
                    <div className="RestaurantPanel__name">
                        Restaurant Name
                    </div>
                    <div className="RestaurantPanel__category">
                        Category Type
                    </div>
                </div>
            </div>
        )
    }
}