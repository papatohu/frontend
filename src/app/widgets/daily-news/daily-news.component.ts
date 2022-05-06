import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import * as xml2js from "xml2js";
import { NewsRss } from './news-rss';
@Component({
  selector: 'app-daily-news',
  templateUrl: './daily-news.component.html',
  styleUrls: ['./daily-news.component.sass']
})
export class DailyNewsComponent{

  constructor(private http: HttpClient) { }
  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
/*    this.http
      .get<any>("https://gadgets.ndtv.com/rss/feeds", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
*/
   }
}

export interface IRssData {}

