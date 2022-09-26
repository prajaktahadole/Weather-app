import "./App.css";
import Inputs from "./components/Inputs";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";


function App() {
  const [query, setQuery] = useState({ q: "Pune" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

    
      await getFormattedWeatherData({ ...query, units }).then((data) => {
       

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  

  return (
    <div className="main">
    
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <Forecast title="daily forecast" items={weather.daily} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          
          
        </div>
      )}

      
    </div>
     );
}

export default App
