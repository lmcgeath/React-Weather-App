import React, {Component, useState, useEffect} from 'react';
import {
   BrowserRouter,
   Route,
   Switch
} from 'react-router-dom';
import axios from 'axios';
import key from './config';
import apiKey from './config';

import './App.css';
import Search from './Components/Search';
import searchValue from './Components/Search';

import Card from './Components/Card';



const App = () => {
   let [ weatherData, setWeatherData ] = useState()
   let weather;
   // function apiCall (zipCode = 97206) {
   function apiCall (query = 'mountains') {


      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1`
     )
   //   axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${key}`)
     .then(res => {
        let weather = res.data
        console.log(weather)
        return weather
      // useEffect(() => { setWeatherData: res.data });
      //   weatherData : {res.data}
         // setWeatherData(res.data);
         // console.log(res.data)
         // return weatherData;

    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    }); 
   }
   // console.log(searchValue)

   // console.log(apiCall(Search.searchValue))
   useEffect(() => apiCall());

  return (
    <div className="App">
    <Search />
    <Card data={weather} />
    </div>
  );
}

export default App;
