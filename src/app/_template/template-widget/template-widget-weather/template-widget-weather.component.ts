import { Component, OnInit } from '@angular/core';
import {  WeatherWidget  } from '../../../_interface/weather-widget';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-template-widget-weather',
  templateUrl: './template-widget-weather.component.html',
  styleUrls: ['./template-widget-weather.component.sass']
})
export class TemplateWidgetWeatherComponent implements OnInit {


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

  public getWeather(url: string): void {
    this.http.get<any>(url).subscribe(res => {
      var test = this.WeatherWidget$;
      if(res.weather[0].main == 'Clouds')
      {
        test.weather='wolkig'
      }
      test.temperature = Number((res.main.temp -273.15).toFixed(0));
    });
  }

  public getMyLocation(): void {
    navigator.geolocation.getCurrentPosition(this.successCallback,this.errorCallback);
  }

  successCallback = (position:any) =>{
    var x = position.coords.latitude;
    var y = position.coords.longitude;
    this.getWeather("http://api.openweathermap.org/data/2.5/weather?lat="+x+"&lon="+y+"&appid=332468f7d43cc6c6858ca81118204cdd")
    //this.getAddress(x, y).then(console.log)
    this.displayLocation(x,y)
  };


  errorCallback = function(error:any){
    var errorMessage = 'Unknown error';
    switch(error.code) {
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
    document.write(errorMessage);
  };


  displayLocation(latitude:any,longitude:any):any{
    var request = new XMLHttpRequest();

    var method = 'GET';
    var widget = this.WeatherWidget$
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAT3XtwPNxF9rcPaEB1HGHpSRRliPZQwSA&latlng=' + latitude + ',' + longitude + '&sensor=true';
    var async = true;
    request.open(method, url, async);
    request.onreadystatechange = function(){
      if(request.readyState == 4 && request.status == 200){
        var data = JSON.parse(request.responseText);
        var address = data.results[0];
        //console.log(address.address_components)
        widget.location = address.address_components[1].long_name
      }
    };
    request.send();
  };

  /*
    getAddress (latitude:any, longitude:any):any {
      return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();

          var method = 'GET';
          var url = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAT3XtwPNxF9rcPaEB1HGHpSRRliPZQwSA&latlng=' + latitude + ',' + longitude + '&sensor=true';
          var async = true;

          request.open(method, url, async);
          request.onreadystatechange = function () {
              if (request.readyState == 4) {
                  if (request.status == 200) {
                      var data = JSON.parse(request.responseText);
                      var address = data.results[0];
                      resolve(address);
                  }
                  else {
                      reject(request.status);
                  }
              }
          };
          request.send();
      });
  };
  */
}
