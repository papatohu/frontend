import { Component, OnInit } from '@angular/core';
import {  WeatherWidget  } from '../../_interface/weather-widget';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-template-widget',
  templateUrl: './template-widget.component.html',
  styleUrls: ['./template-widget.component.sass']
})
export class TemplateWidgetComponent implements OnInit {


  //Add ng lin t
  public WeatherWidget$: WeatherWidget;

  constructor(private http: HttpClient) {
    this.WeatherWidget$ = {
      location: "Stuttgart",
      temperature: 1,
      weather: "Regen"
    };
  }


  apiRoot: string = "http://api.openweathermap.org/data/2.5/weather?q=Illingen&appid=332468f7d43cc6c6858ca81118204cdd";

  ngOnInit(): void {
  }

  public meinefunc(url: string): void {
    this.http.get(url).subscribe(res => console.log(res));
  }

  public getMyLocation(): void {
    navigator.geolocation.getCurrentPosition(this.successCallback,this.errorCallback);
  }

  successCallback = (position:any) =>{
    var x = position.coords.latitude;
    var y = position.coords.longitude;
    this.meinefunc("http://api.openweathermap.org/data/2.5/weather?lat="+x+"&lon="+y+"&appid=332468f7d43cc6c6858ca81118204cdd")
    this.getAddress(x, y).then(this.test123)
  };

  test123(test: any): void{
    var city = test.address_components//[1].long_name
    console.log(city)
    //this.WeatherWidget$.location = "Test"
  }

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

}
