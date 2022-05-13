import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserUtils} from "../../../assets/files/userUtils";
//import * as crypto from 'crypto'
import { sha256, sha224 } from 'js-sha256';
import {map} from "rxjs";
import {User} from "../../interfaces/user-config";
import {UserConfigService} from "../user-config/user-config.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http:HttpClient, private userConfigService:UserConfigService, private router:Router) { }

  newUserUrl:string = "/newUser"
  loginUrl:string = "/login/"
  createNewUser(username:string, password:string){
    password = this.hashPassword(password)
    this.http.put<any>(this.newUserUrl, this.getNewUserBody(username, password)).subscribe(res=>{
      localStorage.setItem("userId", res.id)
      this.userConfigService.setUserId(res.id)
      localStorage.setItem("sessionExpiry", (Date.now()+1000*60*30).toString())
      this.router.navigate([''])})
  }

  hashPassword(password:string):string {
    const hashedPassword = sha256(password)
    return hashedPassword
  }


  getNewUserBody(username:string, password:string) {
    const userConfig = UserUtils.newUserBody
    const userBody = {"username": username, "pw": password,"tileConfigs": userConfig}
    return userBody
  }

  login(username: string, password: string) {
    const user = this.http.get<User>(this.loginUrl + username + "/" + sha256(password)).pipe(map((res:any)=>{return res}))
    this.userConfigService.setUserName(user.pipe(map((res:any)=>{return res.username})))
    return user
  }

  successfulLogin(userJson: User) {
    this.userConfigService.setUserConfig(this.userConfigService.buildUserConfigObservable(userJson.tileConfigs))
    this.userConfigService.setUserId(userJson.id)
    localStorage.setItem("userId", userJson.id)
    localStorage.setItem("sessionExpiry", (Date.now()+1000*60*30).toString())
    this.router.navigate([""])
  }

  logout() {
    localStorage.removeItem("userId")
    localStorage.removeItem("sessionExpiry")
    this.router.navigate(["/logon"])
  }
}
