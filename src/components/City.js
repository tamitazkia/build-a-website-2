import React from "react";
import { useHistory } from "react-router-dom";

// props -> cityName ,temp, color
function City({ cityName, weatherType, temp = 0, color }) {
  const history = useHistory();

  function handleClick() {
    history.push("/city?name=" + cityName);
  }

  return (
    <button
      className={"flex flex-col md:flex-wrap flex-initial box-content h-52 w-52 p-4 m-10 border-transparent bg-yellow-200 rounded-md items-center hover:bg-green-500 shadow-2xl hover:border-transparent text-green-500 hover:text-yellow-200 cursor-pointer" + color}
      onClick={handleClick}
    >
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="text-md text-2xl font-light text-left">{weatherType}</div>
          <div className="text-3xl font-bold">{cityName}</div>
        </div>

        <div className="text-4xl">{Math.round(temp)} °C</div>
      </div>
    </button>
  );
}

export default City;