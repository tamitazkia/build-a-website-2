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
      className={"flex flex-col flex-initial box-content h-32 w-32 p-4 m-10 border-transparent bg-yellow-200 rounded-md items-center hover:bg-green-500 shadow-2xl hover:border-transparent text-green-500 hover:text-yellow-200 cursor-pointer"}
      onClick={handleClick}
    >
      <div>
        <div className="text-3xl items-center font-bold">{cityName}</div>
        <div className="text-4xl items-center">{temp}</div>
      </div>
    </button>
  );
}

export default City;