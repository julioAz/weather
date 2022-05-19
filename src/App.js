import React, { useEffect, useState} from "react";
import {getWeatherData} from "./data/weatherapi";

function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const getData = async () => {
    try {
      const data = await getWeatherData(city);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getData();
    }, []);

  }

  // const [location, setLocation] = useState(false);
  // const [weather, setWeather] = useState();

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position)=> {
  //     getWeather(position.coords.latitude, position.coords.longitude);
  //     setLocation(true)
  //   })
  // }, 
  // [])

  // let getWeather = async (lat, long) => {
  //   let response = await axios.get("http://api.openweathermap.org/data/2.5/forecast",
  //   {
  //     params: {
  //       lat: lat,
  //       lon: long,
  //       appid: '5c76eb05e1433598b5ec7f1fa1d92f6b',
  //       lang: 'pt-br',
  //       units: 'metric'
  //     }
  //   });
  //   setWeather(response.data);
  //   console.log(response.data)
  // }

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
              <h1>Weather in your city </h1>
              <ul>
                  <li>Actual temperature:{weather.city}</li>
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