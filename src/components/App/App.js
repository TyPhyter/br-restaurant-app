import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import RestaurantList from '../RestaurantList/RestaurantList';
import DetailView from '../DetailView/DetailView';
import axios from 'axios';

class App extends Component {

    state = {
        restaurants: [],
        selectedRestaurantIndex: 0,
        showDetailView: false
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

    panelClickHandler = (index, e) => {
        this.setState({
            selectedRestaurantIndex: index,
            showDetailView: true
        });
    }

    mapIconClickHandler = () => {
        //toggle
        this.setState({
            showDetailView: !this.state.showDetailView
        });
    }

    backButtonClickHandler = () => {
        this.setState({
            showDetailView: false
        });
    }

    render() {

        const { restaurants, selectedRestaurantIndex, showDetailView } = this.state;

        return (
            <div className="App">
                <Header 
                    mapIconClickHandler={this.mapIconClickHandler}
                />
                <RestaurantList 
                    restaurants={restaurants}
                    panelClickHandler={this.panelClickHandler}/>
                <DetailView
                    selectedRestaurant={restaurants[selectedRestaurantIndex]}
                    showDetailView={showDetailView}
                    backButtonClickHandler={this.backButtonClickHandler}
                />
            </div>
        );
    }
}

export default App;
