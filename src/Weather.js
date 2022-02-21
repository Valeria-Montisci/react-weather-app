import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from"axios";
import "./Weather.css";

export default function Weather(props){
const [weatherData, setWeatherData] = useState({ready:false});
const [city, setCity]= useState(props.defaultCity);

function handleResponse(response) {
    setWeatherData({
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

function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityChange(event) {
  setCity(event.target.value);
}
function search(){
  const apiKey="bb06c437b40daca0d85a686b45006e54";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse) ;
}
if (weatherData.ready) {
    return (
    <div className="Weather">
        <form onSubmit={handleSubmit}>
        <input 
              type="Search" 
              placeholder="Search a city.." 
              autoFocus="on" 
              className="search-bar" 
              onChange={handleCityChange} />
        <input 
              type="Submit" 
              value="Search" 
              className="search-button"/>
        </form>
        <WeatherInfo  data={weatherData}/>
   </div>
);
}
else {
 search();
return "Loading..."
 }}