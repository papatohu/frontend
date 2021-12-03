import {  Widget  } from './widget';

export interface WeatherWidget extends Widget {
    getWeatherInformation?: void;
    location: string;
    temperature: number;
    weather: string;
}
