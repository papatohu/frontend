import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, publishReplay, refCount} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WidgetStocksService {

  constructor(private http: HttpClient) { }
  url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=SAP&interval=60min&adjusted=false&outputsize=full&apikey=FSX6SP3SBOJTXJM4"
  caches: Observable<any> | undefined
  getInformation2(): Observable<any>{
    if (!this.caches) {
      this.caches = this.http.get(this.url).pipe(
        map(data => data),
        publishReplay(1), // this tells Rx to cache the latest emitted
        refCount() // and this tells Rx to keep the Observable alive as long as there are any Subscribers
      );
    }
    return this.caches;
  }
  getInformation() {
    const data: ReturnType[] = [];
    this.getInformation2().subscribe(res => {
      const keys = Object.keys(res["Time Series (60min)"]);
      keys.forEach(key => {
        const returnType: ReturnType = {Date: new Date(), Open: 0, High: 0, Low: 0, Close: 0, Adj_Close: 0, Volume: 0};
        const year = key.substr(0, 4);
        const month = key.substr(5, 2);
        const day = key.substr(8, 2);
        const hour = key.substr(11, 2);
        const minute = key.substr(14, 2);
        const second = key.substr(17, 2);
        returnType.Date = new Date(Number(year), Number(month), Number(day), Number(hour), Number(minute), Number(second))
        returnType.Open = Number(res["Time Series (60min)"][key]["1. open"])
        returnType.High = Number(res["Time Series (60min)"][key]["2. high"])
        returnType.Low = Number(res["Time Series (60min)"][key]["3. low"])
        returnType.Close = Number(res["Time Series (60min)"][key]["4. close"])
        returnType.Adj_Close = 0
        returnType.Volume = Number(res["Time Series (60min)"][key]["5. volume"])
        data.push(returnType)
      })
    })
    return data
  }
}
class ReturnType {
  Date : Date = new Date()
  Open : number = 0
  High : number = 0
  Low : number = 0
  Close : number = 0
  Adj_Close : number = 0
  Volume : number = 0
}
