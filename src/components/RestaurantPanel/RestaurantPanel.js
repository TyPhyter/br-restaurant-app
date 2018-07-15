import React, { Component } from 'react';
import './RestaurantPanel.css';

export default class RestaurantPanel extends Component {


    render() {

        const { name, category, imgSrc, onClick } = this.props;

        return (
            <div className="RestaurantPanel" onClick={(e)=>{ onClick(this.props.index, e) }}>
                <img className="RestaurantPanel__image" alt={name + ' image '} src={imgSrc} />
                <div className="RestaurantPanel__text-content">
                    <div className="RestaurantPanel__name">
                        {name}
                    </div>
                    <div className="RestaurantPanel__category">
                        {category}
                    </div>
                </div>
            </div>
        )
    }
}