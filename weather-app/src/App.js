import React, {Component, useState} from 'react';
import {
   BrowserRouter,
   Route,
   Switch
} from 'react-router-dom';
import axios from 'axios';
import key from './config';
import './App.css';

const App = () => {
   function apiCall (zipCode = 97206) {
     axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${key}`)
     .then(res => {
     console.log(res)
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    }); 
   }
   apiCall()

  return (
    <div className="App">
    </div>
  );
}

export default App;
