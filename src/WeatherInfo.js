import React from "react";
import FormatDate from "./FormatDate";

export default function weatherInfo(props)
{return (
    <div className="weatherInfo">
             <h1> {props.data.city} </h1>
        <ul>
            <li> <FormatDate date={props.data.date} /> </li>
            <li> {props.data.description} </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img 
                src={props.data.icon} alt={props.data.description} />
                <span className="temperature"> {Math.round(props.data.temperature)}</span>°<span className="unit">C</span>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Humidity: {props.data.humidity}%
                    </li>
                    <li>
                        Wind: {props.data.wind}Km/h
                    </li>
                </ul>
            </div>
        </div>
    </div>
)
    }
