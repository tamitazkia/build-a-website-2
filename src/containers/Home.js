import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";
import City from "../components/City";

const weatherKey = `TODO`; // Your API Key here

function Home() {
  // TODO
  return (
    // Container
    <div className="flex flex-col h-screen bg-green-200">
      <City cityName={"Jakarta"} temp={"27\u00b0C"} color={"bg-red-400"} />

      <City cityName={"Bandung"} temp={"22\u00b0C"} color={"bg-blue-400"} />

      <City cityName={"Granada"} temp={"5\u00b0C"} color={"bg-yellow-300"} />
    </div>
  );
}

export default Home;
