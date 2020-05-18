import React from 'react';

const CardContainer = props => {
   const results = props.weatherData;
   let data = results.map(res => 
      <Card />
   )
   return(
      // <li className='card-container'>
      // </li>
      <div>{}</div>
      )
   }