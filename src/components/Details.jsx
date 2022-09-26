import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function Details({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div className="details">
      <div className="det1">
      <p className="detH">{`${temp.toFixed()}°`}</p>
      <img src={iconUrlFromCode(icon)} alt="" className="detI" />

      <div className="flex text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
      </div>


   
        
         
         
       
     





      <div className="temp2">
 
        
        <div className="temCol">
          <p className="temRow"> <UilSun /> Sunrise:{" "}</p>
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
        </div>


        <div className="temCol">
          <p className="temRow"> <UilSun />  Sunset:{" "}</p>
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
        </div>

        

        <div className="temCol">
           <UilSun />  High:{" "}{`${temp_max.toFixed()}°`}
        </div>
      
        <div className="temCol">
          <UilSun />  Low:{" "}{`${temp_min.toFixed()}°`} 
        </div>
      

        
      

      
       
      </div>
    </div>
  );
}

export default Details;
