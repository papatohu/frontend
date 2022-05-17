import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserLocation, WeatherAndCityInformation, WeatherInformation} from "../../../interfaces/widgets/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  lat:number | undefined
  long: number | undefined
  weatherApiBaseUrl:string[] = ["http://api.openweathermap.org/data/2.5/weather?lat=", "&lon=", "&appid=332468f7d43cc6c6858ca81118204cdd"]
  locationToCityBaseUrl:string[] = ["https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAT3XtwPNxF9rcPaEB1HGHpSRRliPZQwSA&latlng=", ",", "&sensor=true"]

  constructor(private http:HttpClient) { }

  private getUserLocation(): Observable<UserLocation> {
    const observable:Observable<UserLocation> = Observable.create((observer: any) => {
      let userLocation:UserLocation | undefined
      const successCallback = (position:any) =>{
        const lat = position.coords.latitude
        const long = position.coords.longitude
        userLocation = {lat:lat, long:long}
      }
      const errorCallback = (error: any) =>{
        var errorMessage = 'Unknown error';
        switch (error.code) {
          case 1:
            errorMessage = 'Permission denied (allow location)';
            break;
          case 2:
            errorMessage = 'Position unavailable';
            break;
          case 3:
            errorMessage = 'Timeout';
            break;
        }
        userLocation = {lat:0,long:0, error: "!#\\" + errorMessage}
      }
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      setTimeout(() => {
        observer.next(userLocation);
        observer.complete(); // to show we are done with our processing
        // observer.error(new Error("error message"));
      }, 2000);

    })
    return observable
  }

  private getWeather(latLong: Observable<UserLocation>): Observable<Observable<WeatherInformation>> {
    return latLong.pipe(map((res:any)=>{
      if(res.error==undefined) {
        const url = this.weatherApiBaseUrl[0] + res.lat +
          this.weatherApiBaseUrl[1] + res.long + this.weatherApiBaseUrl[2]
        return this.http.get<any>(url)
          .pipe(map((res: any) => {
            return {
              weather: res.weather[0].main,
              temperature: Number((res.main.temp - 273.15).toFixed(0))
            }
          }))
      }
      else
        return this.buildErrorObservable_WeatherInformation(res.error)
    }))
  }

  private getLocationToCity(latLong:Observable<UserLocation>): Observable<Observable<string>> {
    return latLong.pipe(map((res:any)=>{
      if(res.error==undefined) {
        const url = this.locationToCityBaseUrl[0] + res.lat + this.locationToCityBaseUrl[1] + res.long + this.locationToCityBaseUrl[2]
        return this.http.get<any>(url).pipe(map((res: any) => {
          return res.results[0].address_components[1].long_name
        }))
      }
      else
        return this.buildErrorObservable_String(res.error)
    }))
  }

  private buildErrorObservable_String(error:string):Observable<string> {
    return Observable.create((observer:any)=>{
      setTimeout(()=>{
        observer.next(error)
        observer.complete()
      }, 10)
    })
  }

  private buildErrorObservable_WeatherInformation(error:string):Observable<WeatherInformation> {
    return Observable.create((observer:any)=>{
      setTimeout(()=>{
        observer.next({weather: error, temperature: 0})
        observer.complete()
      }, 10)
    })
  }

  public getWeatherInformation():WeatherAndCityInformation {
    const latLong:Observable<UserLocation> = this.getUserLocation()
    const cityName:Observable<Observable<string>> = this.getLocationToCity(latLong)
    const weather:Observable<Observable<WeatherInformation>> = this.getWeather(latLong)
    return {weather: weather, city: cityName}
  }
}
