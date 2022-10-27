import BaseAPI from "./base.api";
import dotenv from "dotenv";

dotenv.config()

const lat = 40.730610;
const lon = -73.935242;
const key = process.env.KEY
const postal_code = 28546;
const hours = 3;

const weatherAPI = {
    current_weather: (data) => BaseAPI.get(`/current?lat=${lat}&lon=${lon}&key=${key}`, data),
    forecast_weather: (data) => BaseAPI.get(`/forecast/hourly?postal_code=${postal_code}&hours=${hours}&key=${key}`, data)
}

export default weatherAPI;
