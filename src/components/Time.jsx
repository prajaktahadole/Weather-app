import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function Time({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="time1">
        <p >
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="time1">
        <p className="time2">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default Time;
