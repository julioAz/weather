import React, { useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [localtion, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position)=> {
      console.log('position latitude', position.coords.latitude,
      'position longitude', position.coords.longitude);
      getWeather('position latitude', position.coords.latitude,
      'position longitude', position.coords.longitude);
      setLocation(true)
    })
  }, 
  [])

  let getWeather = async (lat, long) => {
    let response = await axios.get("http://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        lat: lat,
        lon: long,
        appid: 'process.env.WEATHER_API_KEY',
        lang: 'pt-br',
        units: 'metric'
      }
    });
    setWeather(response.data);
    console.log(response.data);
  }

  if(localtion == false) {
    return (
      <>
        <h2>Voce deve ativar a localização</h2>
      </>
    )
  } else {
    return (
          <>
              <h1>Weather in your city ({weather['weather'][0]['description']})</h1>
              <ul>
                  <li>Actual temperature: {[weather]['temp']}</li>
                  <li>Max temperature: </li>
                  <li>Min temperature: </li>
                  <li>Pressure: </li>
                  <li>Moisture: </li>
              </ul>
          </>
      )
    }
  }

export default App;