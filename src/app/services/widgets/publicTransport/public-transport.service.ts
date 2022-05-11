import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {forkJoin} from "rxjs";
import {PublicTransportComponent} from "../../../widgets/public-transport/public-transport.component";

@Injectable({
  providedIn: 'root'
})
export class PublicTransportService {
  idUrl:string = 'https://api.deutschebahn.com/freeplan/v1/location/'
  detailUrl:string = 'https://api.deutschebahn.com/freeplan/v1/departureBoard/'
  journeyUrl: string = 'https://api.deutschebahn.com/freeplan/v1/journeyDetails/'
  constructor(private htpp:HttpClient) { }

  getInformationArray(origin:string):Observable<Observable<RetType[]>> {
    return this.htpp.get<any>(this.idUrl + origin).pipe(
      map(
        (res => {
            return this.htpp.get<[{}]>(this.detailUrl + res[0]["id"] + "?date=" + this.getTodaysDate()).pipe(
              map(
                ((res2: any) => {
                  let retTypeList:RetType[] = []
                    res2.forEach((res3: any) => {
                      const trainName:string = res3["name"]
                      let detailsId: string = res3["detailsId"]
                      detailsId = this.parseUrlProperty(detailsId)
                      const ret1 = this.htpp.get(this.journeyUrl + detailsId).pipe(map((res4:any) => {
                        for(let i = 0; i < res4.length; i++) {
                          res4[i].stopName = res4[i].stopName.replace("&#x0028;", " (")
                          res4[i].stopName = res4[i].stopName.replace("&#x0029;", ") ")
                        }
                        return res4
                      }))
                      const retType:RetType = {stopName: res3["stopName"],origin: res[0]["name"],trainName: trainName, observableAnyList: ret1}
                      retTypeList.push(retType)
                      }
                    )
                    return retTypeList
                  }
                )
              )
            )
          }
        )
      )
    )
  }

  private parseUrlProperty(prop: string): string{
    let detailsIdArr= prop.split("%")
    prop = detailsIdArr[0]
    prop = prop + "%25" + detailsIdArr[1]
    prop = prop + "%25" + detailsIdArr[2]
    prop = prop + "%25" + detailsIdArr[3]
    prop = prop + "%25" + detailsIdArr[4]
    prop = prop + "%25" + detailsIdArr[5]
    prop = prop + "%25" + detailsIdArr[6]
    return  prop
  }

  private getTodaysDate():string{
    const date = new Date()
    let cDay = date.getDate();
    let cMonth = date.getMonth() + 1;
    let cYear = date.getFullYear();
    return cYear+"-"+cMonth+"-"+cDay
  }

}
export interface RetType {
  origin: string
  stopName: string
  trainName: string
  observableAnyList: Observable<any>
}
