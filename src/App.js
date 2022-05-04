import React, { useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position)=> {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, 
  [])

  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        lat: lat,
        lon: long,
        appid: '5c76eb05e1433598b5ec7f1fa1d92f6b',
        lang: 'pt-br',
        units: 'metric'
      }
    });
    setWeather(res.data);
  }

  if(location === false) {
    return (
      <>
        <h2>Voce deve ativar a localização</h2>
      </>
    )
  } else if (weather === false) {
    return (
      <>
        <h2>Carregando...</h2>
      </>
    )
  } else {
    return (
          <>
              <h1>Weather in your city ({weather['weather'][0]['description']})</h1>
              <ul>
                  <li>Actual temperature:</li>
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