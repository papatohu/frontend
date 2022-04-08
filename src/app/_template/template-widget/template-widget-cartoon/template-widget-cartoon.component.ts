import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-template-widget-cartoon',
  templateUrl: './template-widget-cartoon.component.html',
  styleUrls: ['./template-widget-cartoon.component.sass']
})
export class TemplateWidgetCartoonComponent implements OnInit {

  title = 'XKCD Cartoon of the day';
  myimage = "";

  goCartoon() {
    window.location.href='https://xkcd.com/';
  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void {this.http.get<any>("/info.0.json").subscribe(res => {this.myimage = res.img})
  }

}
