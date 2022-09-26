import "../App.css";
import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items,
  
}) {
  console.log("items", items);
  return (
    <div className="forecast">
        
        {items.map((item, index) => (
          <div
            key={index}>

            <p className="forP">{item.title}</p>

            <img
              src={iconUrlFromCode(item.icon)}
              className="forI"
              alt=""
            />
           
            <p className="forP">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
  
  );
}

export default Forecast;
