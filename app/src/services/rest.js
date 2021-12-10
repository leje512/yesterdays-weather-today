import axios from "axios";

const baseUrl = "http://api.weatherapi.com/v1";
const key = "19a6a6146da04aae80e131758210212";
const latitude = "48.342852";
const longtitude = "10.905494";

async function getCurrentWeather() {
  let response = axios.get(
    `${baseUrl}/current.json?key=${key}&q=${latitude},${longtitude}`
  );
  return response;
}

export default getCurrentWeather;
