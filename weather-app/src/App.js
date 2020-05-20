import React, {Component, useState, useEffect} from 'react';
import {
   BrowserRouter,
   Route,
   Switch
} from 'react-router-dom';
import axios from 'axios';
import key from './config';
// import apiKey from './config';

import './App.css';
import Search from './Components/Search';
import searchValue from './Components/Search';

import Card from './Components/Card';

class App extends Component {
   constructor() {
      super();
      this.state = {
         city: undefined,
         description: undefined,
         temp: undefined,
         high: undefined,
         low: undefined,
         feelsLike: undefined,
         humidity: undefined,
         wind: undefined,
         icon: undefined
      };
    } 
    componentDidMount() {
      this.performSearch();
      // console.log(searchValue)

    }

   performSearch = (query = 97214) => {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${query}&units=imperial&appid=${key}`)
         .then(res => {
            console.log(res.data)
            this.setState({
            city: res.data.name,
            description: res.data.weather[0].description.toUpperCase(),
            temp: Math.floor(res.data.main.temp),
            high: res.data.main.temp_max,
            low: res.data.main.temp_min,
            feelsLike: Math.floor(res.data.main.feels_like),
            humidity: res.data.main.humidity,
            wind: Math.floor(res.data.wind.speed),
            icon: res.data.weather[0].icon

        })
    })
    
   //  } else if (//entered in city and state boxes) {
   //     axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${key}`)
   //       .then(res => {
   //          console.log(res.data)
   //       })
   //       .catch(error => {
   //          console.log('Error fetching and parsing data', error);
   //        });   
    }
render() {
  return (
    <div className="App">
      <Search onSearch={this.performSearch} />
      <Card data={this.state} />
    </div>
  );
}}

export default App;
