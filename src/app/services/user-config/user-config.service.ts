import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MapsConfiguration, UserConfig} from "../../interfaces/user-config";
import {map, Observable} from "rxjs";
import {KtdGridLayout} from "@katoid/angular-grid-layout";

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

  constructor(private http:HttpClient) { }
  private userConfig!:UserConfig
  public getUser():Observable<KtdGridLayout> {
    const userId = this.getUserId()
    return this.http.get<UserConfig>("/getConfig/" + userId).pipe(map((userConfig:UserConfig) => {
      this.userConfig = userConfig
      let layout:KtdGridLayout = []
      userConfig.weather==undefined?null:layout.push({id:"1",x:userConfig.weather.position.x,y:userConfig.weather.position.y,w:2,h:2})
      userConfig.nasa==undefined?null:layout.push({id:"2",x:userConfig.nasa.position.x,y:userConfig.nasa.position.y,w:1.5,h:3})
      userConfig.cartoon==undefined?null:layout.push({id:"3",x:userConfig.cartoon.position.x,y:userConfig.cartoon.position.y,w:2.5,h:4})
      userConfig.maps==undefined?null:layout.push({id:"4",x:userConfig.maps.position.x,y:userConfig.maps.position.y,w:1.5,h:3.5})
      userConfig.public_transport==undefined?null:layout.push({id:"5",x:userConfig.public_transport.position.x,y:userConfig.public_transport.position.y,w:2,h:4})
      userConfig.stocks==undefined?null:layout.push({id:"6",x:userConfig.stocks.position.x,y:userConfig.stocks.position.y,w:1.5,h:4})
      userConfig.text_of_the_day==undefined?null:layout.push({id:"7",x:userConfig.text_of_the_day.position.x,y:userConfig.text_of_the_day.position.y,w:1,h:1})
      userConfig["daily-news"]==undefined?null:layout.push({id:"8",x:userConfig["daily-news"].position.x,y:userConfig["daily-news"].position.y,w:1,h:1})
      return layout
    }))
  }

  public postMapsConfig(origin:string, destination:string, mode:string, avoid:string[], measurements:string) {
    let userConfig:UserConfig = this.userConfig
    userConfig.maps.mapsConfiguration.origin = origin
    userConfig.maps.mapsConfiguration.destination = destination
    userConfig.maps.mapsConfiguration.mode = mode
    userConfig.maps.mapsConfiguration.avoid = avoid
    userConfig.maps.mapsConfiguration.measurements = measurements
    this.http.post<UserConfig>("/updateConfig/" + this.getUserId(), userConfig).subscribe()
  }

  public getMapsData():MapsConfiguration {
    let mapsConfiguration:MapsConfiguration = {avoid: [], destination: "", measurements: "", mode: "", origin: ""}
    mapsConfiguration.origin = this.userConfig.maps.mapsConfiguration.origin
    mapsConfiguration.destination = this.userConfig.maps.mapsConfiguration.destination
    mapsConfiguration.mode = this.userConfig.maps.mapsConfiguration.mode
    mapsConfiguration.avoid = this.userConfig.maps.mapsConfiguration.avoid
    mapsConfiguration.measurements = this.userConfig.maps.mapsConfiguration.measurements
    return mapsConfiguration
  }

  private getUserId():String{
    //return TestUser's Id
    const testUserId = "7dbb5bc6-bad3-40d5-badb-c3326e1eed63"
    return testUserId
  }
}
