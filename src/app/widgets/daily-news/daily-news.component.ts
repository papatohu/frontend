import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import * as xml2js from "xml2js";
//import { NewsRss } from './news-rss';

@Component({
  selector: 'app-daily-news',
  templateUrl: './daily-news.component.html',
  styleUrls: ['./daily-news.component.sass']
})
export class DailyNewsComponent implements OnInit {
//  RssData: NewsRss;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
 /*   this.http
      .get<any>("https://www.tagesschau.de/newsticker.rdf", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  }
*/
}

}
