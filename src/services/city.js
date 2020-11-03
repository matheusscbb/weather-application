import { API_KEY } from "../utils/constants";

const config = {
  method: "GET",
  headers: new Headers(),
  mode: "cors",
  cache: "default",
};

export const getCloserWeatherCities = async (lat, lng) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=15&APPID=${API_KEY}`,
    config
  )
};
