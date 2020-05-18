import React, { useState } from 'react'
import App from '../App';
import Card from 'react-bootstrap/Card'
const card = props => {
   const results = props.data;
   console.log(results)
// console.log(props.setWeatherData)
   // let temp = props.weatherData.main.temp;
   return(
      <div>
      <Card style={{ width: '18rem' }}>
   <Card.Body>
    <Card.Title>Current Weather</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitl </Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
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