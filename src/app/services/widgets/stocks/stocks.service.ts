import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApexAxisChartSeries, ApexTitleSubtitle} from "ng-apexcharts";


export type OutputType = {
  series: ApexAxisChartSeries
  title: ApexTitleSubtitle
}
@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http:HttpClient) { }


  getUrl(): {url:string, symbol:string}{
    const apiBase = "https://www.alphavantage.co/query?"
    const queryFunction = "TIME_SERIES_INTRADAY"
    const querySymbol = "SAP"
    const queryInterval = "15min"
    const adjusted = "false"
    const outputSize = "full"
    const apiKey = "FSX6SP3SBOJTXJM4"
    const url = apiBase + "function=" + queryFunction + "&symbol=" + querySymbol + "&interval=" + queryInterval +
      "&adjusted=" + adjusted + "&outputsize=" + outputSize + "&apikey=" + apiKey
    const cfg = {url: url, symbol: querySymbol}
    return cfg
  }
  getDataArrayObservable2(): Observable<OutputType> {
    const cfg = this.getUrl()
    const url = cfg.url
    var dataa: [{x: string, y: number[]}] = [{x:"",y:[]}]
    this.http.get<any>(url).subscribe(res => {
      const keys = Object.keys(res["Time Series (15min)"]);
      let date= ""
      keys.forEach(key => {
        var data2
        var input = res["Time Series (15min)"][key]
        if(date == "")
          date = key.toString().substr(0,10)
        if(key.toString().substr(0,10) == date) {
          data2 = {
            x: key.toString(),
            y: [Number(input["1. open"]), Number(input["2. high"]), Number(input["3. low"]), Number(input["4. close"])]
          }
          dataa.push(data2)
        }
      })
      dataa.reverse()
    })
    let observable=Observable.create((observer: any) => {
      setTimeout(() => {
        const series = [
          {
            name: "candle",
            data: dataa
          }
        ]
        const title = {
          text: cfg.symbol,
          align: "left"
        }
        const output = {series: series, title: title}
        observer.next(output);
        console.log("am done");
        observer.complete(); // to show we are done with our processing
        // observer.error(new Error("error message"));
      }, 2000);

    })
    return observable
  }
}

