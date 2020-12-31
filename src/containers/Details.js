import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import WeatherImage from "../components/WeatherImage";
import "../App.css";

// TODO
// - implement API
// - add props to details screen
// - style the details screen

function Details() {
  const history = useHistory();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    console.log(process.env.REACT_APP_WEATHER_KEY);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        setWeatherData(weather);
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.log(error);
      });
  }, [city]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("name");
    if (city) {
      setCity(city);
    }
  }, [history]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    let cloudiness = "";
    let currentTemp = "";
    let highTemp = "";
    let humidity = "";
    let lowTemp = "";
    let weatherType = "";
    let windSpeed = "";

    if (weatherData) {
      cloudiness = `${weatherData.clouds.all}%`;
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
      highTemp = `${Math.round(weatherData.main.temp_max)}°C`;
      humidity = `${weatherData.main.humidity}%`;
      lowTemp = `${Math.round(weatherData.main.temp_min)}°C`;
      weatherType = `${weatherData.weather[0].description}`;
      windSpeed = `${weatherData.wind.speed} mph`;
    }

    return {
      cloudiness,
      currentTemp,
      highTemp,
      humidity,
      lowTemp,
      weatherType,
      windSpeed,
    };
  }, [weatherData]);

  return (
    // Container
    <div className="flex flex-col h-screen text-center md:text-left items-center bg-repeat bg-gray-300 font-mono">
      <div className="items-center p-8 m-4 mb-10 text-lime-800 text-5xl font-bold flex ">Weather in {city}</div>
      
      <div className="flex flex-col md:flex-row" >
        <div className="flex flex-col flex-initial p-8 m-4 border-2 rounded-md border-gray-800 items-center hover:bg-white hover:shadow-lg hover:border-transparent transform hover:scale-110 transition duration-700 ease-in-out motion-reduce:transform-none">
          <WeatherImage weatherType={weatherType} className="text-5xl" />
          <div>{weatherType}</div>
          <div className="text-3xl text-center font-bold group-hover:text-gray-900">Current <br></br> Temperature : {currentTemp}</div>
        </div>

        <div className="flex flex-col text-gray-500 hover:text-gray-900 text-2xl md:flex-col p-8 m-4 border-0 rounded-md hover:bg-white hover:shadow-lg hover:border-transparent">
          <div>High Temperature : {highTemp}</div>
          <div>Cloudiness       : {cloudiness}</div>
          <div>Low Temperature  : {lowTemp}</div>
          <div>Humidity         : {humidity}</div>
          <div>Wind Speed       : {windSpeed}</div>
        </div>
      </div>

    </div>
  );
}

export default Details;