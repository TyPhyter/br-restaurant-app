import React, { Component } from 'react';
import RestaurantPanel from '../RestaurantPanel/RestaurantPanel';

import axios from 'axios';

export default class RestaurantList extends Component {

    state = {
        restaurants: []
    }

    getRestaurants() {
        axios('https://s3.amazonaws.com/br-codingexams/restaurants.json')
            .then((response) => {
                console.log(response.data.restaurants);
                this.setState({
                    restaurants: response.data.restaurants
                });
            });
    }

    componentDidMount() {
        this.getRestaurants();
    }

    render() {
        return (
            <div className="RestaurantList">
                { 
                    this.state.restaurants.map((restaurant, index) => (
                        <RestaurantPanel
                            key={index}
                            name={restaurant.name}
                            category={restaurant.category}
                            imgSrc={restaurant.backgroundImageURL}
                        />
                    ))
                }
            </div>
        )
    }
}