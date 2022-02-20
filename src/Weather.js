import React, {useState} from "react";
import formatDate from "./formatDate";
import axios from"axios";
import "./Weather.css";
export default function Weather(props){
const [weatherData, setWeatherData] = useState({ready:false});
function handleResponse(response){
    setWeatherData(        {
      ready:true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        city: response.data.name,
        description : response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        date: new Date (response.data.dt * 1000),
        });
 
}
if (weatherData.ready) {
    return (
    <div className="Weather">
        <form>
        <input type="Search" placeholder="Search a city.." autoFocus="on" className="search-bar" />
        <input type="Submit" value="Search" className="search-button"/>
        </form>
        <h1> {weatherData.city} </h1>
        <ul>
            <li> <formatDate date={weatherData.date} /> </li>
            <li> {weatherData.description} </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img 
                src={weatherData.icon} alt={weatherData.description} />
                <span className="temperature"> {Math.round(weatherData.temperature)}</span>°<span className="unit">C</span>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Humidity: {weatherData.humidity}%
                    </li>
                    <li>
                        Wind: {weatherData.wind}Km/h
                    </li>
                </ul>
            </div>
        </div>
    </div>
)}
else {
const apiKey="d9d50f2f019894bca4e62266dfe12e78";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.dafaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse) 

return "Loading..."
 }}