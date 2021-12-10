import axios from "axios";

const baseUrl = "http://api.weatherapi.com/v1";
const key = "19a6a6146da04aae80e131758210212";
const latitude = "48.342852";
const longtitude = "10.905494";

async function getCurrentWeather() {
  const response = axios.get(
    `${baseUrl}/current.json?key=${key}&q=${latitude},${longtitude}`
  );
  const data = (await response).data;
  return data;
}

export default getCurrentWeather;
