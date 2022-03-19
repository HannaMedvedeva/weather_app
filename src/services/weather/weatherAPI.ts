import { WeatherForecastProps} from "../../store/weatherSlice/weatherSlice";
import axios from "axios";
import {WeatherSchema} from "../../schema/weatherSchema";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export async function fetchWeatherForecast({city, units}: WeatherForecastProps): Promise<WeatherSchema | undefined>  {
    let query = `appid=${API_KEY}&units=${units}&q=${city}`;

    try {
        const response = await axios.get<WeatherSchema>(`https://api.openweathermap.org/data/2.5/weather?${encodeURI(query)}`)

        if(response.statusText === 'OK'){
            return response.data;
        }
    } catch (error) {
        console.error(error);
    }
}
