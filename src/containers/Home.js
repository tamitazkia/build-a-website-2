import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// import Header from "../components/Header";
// import WeatherImage from "../components/WeatherImage";

import City from "../components/City";
const weatherKey = `e436b43bda1e6f235a6143b958400338`
function Home() {
  const history = useHistory();

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Jakarta")

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherKey}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        setWeatherData(weather);
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.warn(error);
      });
  }, [city]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("city");
    if (city) {
      setCity(city);
    }
  }, [history]);

  const { currentTemp } = useMemo(() => {
    let currentTemp = "";
    if (weatherData) {
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
    }
    return {
      currentTemp,
    };
  }, [weatherData]);


  return (
    // Container
    <div className="flex flex-col h-screen bg-green-200 font">
      <City cityName={city} temp={currentTemp} color={"bg-yellow-500"} />
    </div>
  );
}

export default Home;
