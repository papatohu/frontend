import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {forkJoin} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublicTransportService {
  idUrl:string = 'https://api.deutschebahn.com/freeplan/v1/location/Karlsruhe'
  detailUrl:string = 'https://api.deutschebahn.com/freeplan/v1/departureBoard/'
  constructor(private htpp:HttpClient) { }

  getInformationArray():Observable<Observable<any[]>> {
    return this.htpp.get<any>(this.idUrl).pipe(map((res=> {return this.htpp.get(this.detailUrl +
      res[0]["id"] + "?date=" + this.getTodaysDate()).pipe(map(((res2:any)=>{return res2})))})))
  }

  private getTodaysDate():string{
    const date = new Date()
    let cDay = date.getDate();
    let cMonth = date.getMonth() + 1;
    let cYear = date.getFullYear();
    return cYear+"-"+cMonth+"-"+cDay
  }

}
