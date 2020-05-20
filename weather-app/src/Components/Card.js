import React, { useState } from 'react'

const card = props => {
   const weatherData = props.data;
   // console.log(weatherData)
   return(
      <div className="container">
      <div className="widget">
      <div className="details">
      <div className="city">{weatherData.city}</div>
      <div className="temperature">{weatherData.temp}°</div>
      <div className="summary">
        <p className="summaryText">{weatherData.description}</p>
      </div>
      <div className="precipitation">Feels like: {weatherData.feelsLike}° Humidity: {weatherData.humidity}%</div>
      <div className="wind">Wind: {weatherData.wind} MPH</div>
    </div>
      <div className="pictoBackdrop"></div>
      <div className="pictoFrame"></div>
      <div className="pictoCloudBig"></div>
      <div className="pictoCloudFill"></div>
      <div className="pictoCloudSmall"></div>
      <div>
         <img className="icon" src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}/></div>
   </div>
</div>
//       <div>
//          <Card className='card' style={{ width: '30rem' }}>
//          {/* <Card.Header>Header</Card.Header> */}
//             <Card.Body>
//             <Card.Title>Current Weather for {weatherData.city} </Card.Title>
//             <Card.Subtitle >Condition: {weatherData.description} </Card.Subtitle>
//             <Card.Text>  Current Temp: { weatherData.temp }° Feels like: {weatherData.feelsLike}° High: {weatherData.high}°  Low: {weatherData.low}°  Humidity: {weatherData.humidity}%
//             </Card.Text>
//             <Card.Link href="#">Card Link</Card.Link>
//             <Card.Link href="#">Another Link</Card.Link>
//             </Card.Body>
//          </Card>
// </div>
     // <div>{props.results}</div>
   // <li className='card-container'>
   // </li>
   // <div>{props.weatherData.id}</div>
   )
}

export default card;