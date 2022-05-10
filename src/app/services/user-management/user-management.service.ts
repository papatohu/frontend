import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserUtils} from "../../../assets/files/userUtils";
//import * as crypto from 'crypto'
import { sha256, sha224 } from 'js-sha256';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http:HttpClient) { }

  newUserUrl:string = "/newUser"
  userId:string = ""
  createNewUser(username:string, password:string){
    password = this.hashPassword(password)
    this.http.put<any>(this.newUserUrl, this.getNewUserBody(username, password)).subscribe(res=>{this.userId = res.id; console.log(res.id)})
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
}
