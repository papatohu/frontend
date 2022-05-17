import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {WeatherInformation} from "../../interfaces/widgets/weather";
import {WeatherService} from "../../services/widgets/weather/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
//this is the component where design patterns are being applied
export class WeatherComponent implements OnInit {


  //Add ng lint
  public obsObsWeather: Observable<Observable<WeatherInformation>> | undefined
  public obsObsCity: Observable<Observable<string>> | undefined
  public errorMessage: string | undefined

  constructor(private weatherService:WeatherService) {
  }

  ngOnInit(): void {
    this.displayWeather()
  }

  private displayWeather() {
    const weather = this.weatherService.getWeatherInformation()
    this.obsObsWeather = weather.weather
    this.obsObsCity = weather.city
  }

  instanceOfObs(par:any):boolean {
    return par instanceof Observable
  }

  setError(errorMessage: string):boolean {
    this.errorMessage = errorMessage
    return false
  }
}
