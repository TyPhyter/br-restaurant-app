import React, { Component } from 'react';
import RestaurantPanel from '../RestaurantPanel/RestaurantPanel';

export default class RestaurantList extends Component {

    state = {
        restaurants: this.props.restaurants
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            restaurants: nextProps.restaurants
        });
    }

    render() {

        return (
            <div className="RestaurantList">
                { 
                    this.state.restaurants.map((restaurant, index) => (
                        <RestaurantPanel
                            key={index}
                            index={index}
                            name={restaurant.name}
                            category={restaurant.category}
                            imgSrc={restaurant.backgroundImageURL}
                            onClick={this.props.panelClickHandler}
                        />
                    ))
                }
            </div>
        )
    }
}