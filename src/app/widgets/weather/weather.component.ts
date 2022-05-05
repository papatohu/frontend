import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {


  //Add ng lint
  public WeatherWidget$: WeatherWidget;

  constructor(private http: HttpClient) {
    this.WeatherWidget$ = {
      location: "Stuttgart",
      temperature: 1,
      weather: "Regen"
    };
  }

  ngOnInit(): void {
    this.getMyLocation();
  }

  public getWeather(url: string): Observable<any> {
    return this.http.get<any>(url)
  }
  public setWeather(observable: Observable<any>): void {
    observable.subscribe(res => {
      if (res.weather[0].main == 'Clouds') {
        this.WeatherWidget$.weather = 'wolkig'
      }
      this.WeatherWidget$.temperature = Number((res.main.temp - 273.15).toFixed(0));
    });
  }

  public getMyLocation(): void {
    navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback);
  }

  successCallback = (position: any) => {
    var x = position.coords.latitude;
    var y = position.coords.longitude;
    this.setWeather(this.getWeather("http://api.openweathermap.org/data/2.5/weather?lat=" + x + "&lon=" + y + "&appid=332468f7d43cc6c6858ca81118204cdd"))
    //this.getAddress(x, y).then(console.log)
    this.displayLocation(x, y)
  };


  errorCallback = (error: any) => {
    var errorMessage = 'Unknown error';
    switch (error.code) {
      case 1:
        errorMessage = 'Permission denied';
        break;
      case 2:
        errorMessage = 'Position unavailable';
        break;
      case 3:
        errorMessage = 'Timeout';
        break;
    }
    this.WeatherWidget$.location = errorMessage;
    this.WeatherWidget$.weather = "";
    this.WeatherWidget$.temperature = 0;
    //document.write(errorMessage);
  };


  displayLocation(latitude: any, longitude: any): any {
    var request = new XMLHttpRequest();

    var method = 'GET';
    var widget = this.WeatherWidget$
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAT3XtwPNxF9rcPaEB1HGHpSRRliPZQwSA&latlng=' + latitude + ',' + longitude + '&sensor=true';
    var async = true;
    request.open(method, url, async);
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        var data = JSON.parse(request.responseText);
        var address = data.results[0];
        //console.log(address.address_components)
        widget.location = address.address_components[1].long_name
      }
    };
    request.send();
  };

}

interface WeatherWidget {
  getWeatherInformation?: void;
  location: string;
  temperature: number;
  weather: string;
}
