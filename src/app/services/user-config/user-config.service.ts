import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MapsConfiguration, User, UserConfig} from "../../interfaces/user-config";
import {map, Observable} from "rxjs";
import {KtdGridLayout} from "@katoid/angular-grid-layout";
import {LoginStatus} from "../../enums/login-status";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

  constructor(private http:HttpClient, private router:Router) { }
  private userId!:string | null
  private userConfig!:Observable<UserConfig>
  private username!:Observable<any>
  public setUserConfig(userConfig:Observable<UserConfig>) {
    this.userConfig = userConfig
  }
  public getUserConfig():Observable<UserConfig> {
    return this.userConfig
  }
  public setUserId(userId: string) {
    this.userId = userId
  }
  public getUserName():Observable<any> {
    return this.username;
  }
  public setUserName(username:Observable<any>) {
    this.username = username
  }
  public setUserIdAsync(userId: Observable<string>) {
    userId.subscribe(res=>this.userId = res)
  }
  getLoginStatus(): LoginStatus {
    if (this.userConfig != null)
      return LoginStatus.LOGGED_IN
    if (localStorage.getItem("userId") != null)
      return LoginStatus.LOGGED_IN_RELOADED
    this.router.navigate(["/logon"])
    return LoginStatus.NOT_LOGGED_IN
  }

  public initUser() {
    const loginStatus:LoginStatus = this.getLoginStatus()
    const userConfig = this.userConfig
    if (loginStatus == LoginStatus.LOGGED_IN)
      return
    if(loginStatus == LoginStatus.LOGGED_IN_RELOADED) {
      this.userId = localStorage.getItem("userId")
      const user = this.http.get("/get/" + localStorage.getItem("userId")).pipe(map((user:any)=>{return user}))
      this.username = user.pipe(map((user:any)=>{return user.username}))
      this.userConfig = user.pipe(map((user:any)=>{return user.tileConfigs}))
      return
    }
    this.router.navigate(['/logon'])
    return
  }

  public getUserGridLayoutMapping():Observable<KtdGridLayout> | undefined {
    return this.mapUserConfigToKtdGridLayoutAsync(this.userConfig)
  }

  private mapUserConfigToKtdGridLayoutSync(userConfig:UserConfig): KtdGridLayout {
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
  }
  private mapUserConfigToKtdGridLayoutAsync(userConfig:Observable<UserConfig>): Observable<KtdGridLayout> {
    return userConfig?.pipe(map((res:any)=>{
      return this.mapUserConfigToKtdGridLayoutSync(res)
    }))
  }

  public postMapsConfig(origin:string, destination:string, mode:string, avoid:string[], measurements:string) {
    this.userConfig.subscribe((userConfig:UserConfig) => {
      userConfig.maps.mapsConfiguration.origin = origin
      userConfig.maps.mapsConfiguration.destination = destination
      userConfig.maps.mapsConfiguration.mode = mode
      userConfig.maps.mapsConfiguration.avoid = avoid
      userConfig.maps.mapsConfiguration.measurements = measurements
      this.userConfig = this.buildUserConfigObservable(userConfig)
      this.http.post<UserConfig>("/updateConfig/" + this.userId, userConfig).subscribe()
    })
  }
  buildUserConfigObservable(userConfig:UserConfig):Observable<UserConfig>{
    return Observable.create((observer:any) => {
      setTimeout(() => {
        observer.next(userConfig)
        observer.complete()
      }, 2000)
    })
  }

  public getMapsData():Observable<MapsConfiguration> {
    return this.userConfig.pipe(map((userConfig:UserConfig)=>{
      let mapsConfiguration:MapsConfiguration = {avoid: [], destination: "", measurements: "", mode: "", origin: ""}
      mapsConfiguration.origin = userConfig.maps.mapsConfiguration.origin
      mapsConfiguration.destination = userConfig.maps.mapsConfiguration.destination
      mapsConfiguration.mode = userConfig.maps.mapsConfiguration.mode
      mapsConfiguration.avoid = userConfig.maps.mapsConfiguration.avoid
      mapsConfiguration.measurements = userConfig.maps.mapsConfiguration.measurements
      return mapsConfiguration
    }))
  }

  // private getUserId():String{
  //   //return TestUser's Id
  //   const testUserId = "7dbb5bc6-bad3-40d5-badb-c3326e1eed63"
  //   return testUserId
  // }

  postNewWidgetPositionsToBackend(layout: KtdGridLayout):void {
    this.userConfig.subscribe((userConfig:UserConfig)=>{
      userConfig.weather.position = {x: layout[0].x, y: layout[0].y}
      userConfig.nasa.position = {x: layout[1].x, y: layout[1].y}
      userConfig.cartoon.position = {x: layout[2].x, y: layout[2].y}
      userConfig.maps.position = {x: layout[3].x, y: layout[3].y}
      userConfig.public_transport.position = {x: layout[4].x, y: layout[4].y}
      userConfig.stocks.position = {x: layout[5].x, y: layout[5].y}
      userConfig.text_of_the_day.position = {x: layout[6].x, y: layout[6].y}
      userConfig["daily-news"].position = {x: layout[7].x, y: layout[7].y}
      this.userConfig = this.userConfig.pipe(map((newUserConfig:UserConfig)=>{return userConfig}))
      this.http.post<UserConfig>("/updateConfig/" + this.userId, userConfig).subscribe()
    })
  }

  getCityArray():Observable<string[]> {
    let array = this.http.get<string[]>("/getConfig/cityArray").pipe(map((cityArray:string[])=>{return cityArray}))
    return array
  }

  getPublicTransportOrigin(): Observable<string> {
    return this.userConfig.pipe(map((userConfig:UserConfig)=>{
      return userConfig.public_transport.origin
    }))
  }
  setPublicTransportOrigin(origin:string) {
    this.userConfig = this.userConfig.pipe(map((userConfig:UserConfig)=>{
      userConfig.public_transport.origin = origin
      return userConfig
    }))
    this.postUserConfig()
  }
  postUserConfig() {
    this.userConfig.subscribe((userConfig:UserConfig)=>{
      this.http.post("/updateConfig/" + this.userId, userConfig).subscribe()
    })
  }
}
