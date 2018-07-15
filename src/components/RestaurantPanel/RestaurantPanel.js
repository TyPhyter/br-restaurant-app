import React, { Component } from 'react';
import './RestaurantPanel.css';

export default class RestaurantPanel extends Component {

    render() {
        return (
            <div className="RestaurantPanel">
                <img className="RestaurantPanel__image" alt={this.props.name + ' image '} src={this.props.imgSrc} />
                <div className="RestaurantPanel__text-content">
                    <div className="RestaurantPanel__name">
                        {this.props.name}
                    </div>
                    <div className="RestaurantPanel__category">
                        {this.props.category}
                    </div>
                </div>
            </div>
        )
    }
}