import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'

const card = props => {
   const weatherData = props.data;
   console.log(weatherData)
   return(
      <div>
         <Card className='card' style={{ width: '30rem', border: 'dark' }}>
         {/* <Card.Header>Header</Card.Header> */}
            <Card.Body>
            <Card.Title>Current Weather for {weatherData.city} </Card.Title>
            <Card.Subtitle >Condition: {weatherData.description} </Card.Subtitle>
            <Card.Text>  Current Temp: { weatherData.temp }° Feels like: {weatherData.feelsLike}° High: {weatherData.high}°  Low: {weatherData.low}°  Humidity: {weatherData.humidity}%
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
         </Card>
</div>
     // <div>{props.results}</div>
   // <li className='card-container'>
   // </li>
   // <div>{props.weatherData.id}</div>
   )
}

export default card;