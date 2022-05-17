import {Observable} from "rxjs";
export interface UserLocation {
  lat: number | undefined
  long: number | undefined
  error?: string
}
export interface WeatherInformation {
  weather: string
  temperature: number
}
export interface WeatherAndCityInformation {
  weather:Observable<Observable<WeatherInformation>>
  city:Observable<Observable<string>>
}
