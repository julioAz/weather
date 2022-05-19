import axios from "axios";

const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast';
const apiKey = '5c76eb05e1433598b5ec7f1fa1d92f6b';

export const getWeatherData = async (cityname) => {
    try {
        const {data} = await axios.get(`${baseUrl}?q=${cityname}&appid=${apiKey}&lang=pt-br&units=metric`);
        return data;
    } catch (error) {
        throw error;
    }
}