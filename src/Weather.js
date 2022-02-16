import React from "react";
import "./Weather.css";
export default function Weather()
{return(
    <div className="Weather">
        <input type="Search" placeholder="Search a city.." className="search-bar" />
        <input type="Submit" value="Search" className="search-button"/>
        <h1> Sydney </h1>
        <ul>
            <li> Wednesay 07:00</li>
            <li> Cloudy </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img 
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="cloudy" />
                6°C
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Precipitation: 12%
                    </li>
                    <li>
                        Humidity: 20%
                    </li>
                    <li>
                        Wind: 1Km/h
                    </li>
                </ul>
            </div>
        </div>
    </div>
)}