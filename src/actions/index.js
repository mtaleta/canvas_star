import axios from 'axios';

const API_KEY = '2c9d894f6971e96d756c4a3029cc6e3d';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
