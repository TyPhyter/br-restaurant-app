import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import RestaurantPanel from '../RestaurantPanel/RestaurantPanel';
import RestaurantList from '../RestaurantList/RestaurantList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RestaurantList>
          <RestaurantPanel />
          <RestaurantPanel />
          <RestaurantPanel />
          <RestaurantPanel />
        </RestaurantList>
      </div>
    );
  }
}

export default App;
