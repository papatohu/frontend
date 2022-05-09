import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import * as xml2js from "xml2js";
import { NewsRss } from './news-rss';
import {map, Observable} from "rxjs";
const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");
@Component({
  selector: 'app-daily-news',
  templateUrl: './daily-news.component.html',
  styleUrls: ['./daily-news.component.sass']
})
export class DailyNewsComponent implements OnInit{

  ngOnInit() {
    this.$data = this.GetRssFeedData()
  }


  constructor(private http: HttpClient) { }
  public $data: Observable<IRssData[]> | undefined
  GetRssFeedData():Observable<IRssData[]> {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return this.http.get("/newsticker.rdf", {responseType : "text"}).pipe(map((res: any) => {
      const parser = new XMLParser();
      let jObj = parser.parse(res);
      let test = jObj.rss.channel.item
      return test
    }))
   }


}

export interface IRssData {
  category: string
  description: string
  guid: string
  link: string
  title: string
}

