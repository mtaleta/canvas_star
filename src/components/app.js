import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Home from '../containers/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
