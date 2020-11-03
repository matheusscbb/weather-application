import { API_KEY } from "../utils/constants";

const config = {
  method: "GET",
  headers: new Headers(),
  mode: "cors",
  cache: "default",
};

export const getCloserWeatherCities = async (lat, lng) => {
  // add metric to get right system of temperature
  // for skill test I create a temparature func on ../utils/tempature.js
  return fetch(
    `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&units=metric&cnt=15&APPID=${API_KEY}`,
    config
  )
};
