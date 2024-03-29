import React from 'react';
import search_icon from "../Image/search.png";
import clear_icon from "../Image/clear.png";
import drizzle_icon from "../Image/drizzle.png";
import rain_icon from "../Image/rain.png";
import snow_icon from "../Image/snow.png";
import wind_icon from "../Image/wind.png";
import humidity_icon from "../Image/humidity.png";
import cloud_icon from "../Image/cloud.png";
import "./WeatherApp.css";

const WeatherApp = () => {
   
  let api_key = "e7cef0baf61b72643531c5236430fa4a"

  const search = async () =>{
      const element = document.getElementsByClassName("cityInput")
      if(element[0].value==="")
      {
        return 0;
      }

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`;

      let response = await fetch(url);
      let data = await response.json();
      const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate")

  }

  return (
    <div className='container'>
     <div className="top-bar">
      <input type='text' className='cityInput' placeholder='search'/>
      <div className="search-icon" onClick={()=>{search()}}>
        <img src={search_icon} alt=''/>
      </div>
        
        </div> 
        <div className="weather-image">
          <img src={cloud_icon} alt=''/>
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
              <div className="wind-rate">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
     </div>

    
  )
}

export default WeatherApp