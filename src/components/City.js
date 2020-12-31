import React from "react";
import { useHistory } from "react-router-dom";

// props -> cityName ,temp, color
function City({ cityName, temp, color }) {
  const history = useHistory();

  function handleClick() {
    history.push("/city?name=" + cityName);
  }

  return (
    <button
      className={"flex flex-col p-8 justify-between items-center " + color}
      onClick={handleClick}
    >
      <div className="flex flex-col flex-initial p-8 m-4 border-transparent bg-yellow-200 rounded-md items-center hover:bg-green-500 shadow-2xl hover:border-transparent text-green-500 hover:text-yellow-200 cursor-pointer">
        <div className="text-3xl font-bold">{cityName}</div>
        <div className="text-4xl">{temp}</div>
      </div>
    </button>
  );
}

export default City;