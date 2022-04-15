import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-template-widget-cartoon',
  templateUrl: './template-widget-cartoon.component.html',
  styleUrls: ['./template-widget-cartoon.component.sass']
})
export class TemplateWidgetCartoonComponent implements OnInit {

  title = 'XKCD Cartoon of the day';

  goCartoon() {
    window.location.href='https://xkcd.com/';
  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://xkcd.com/").subscribe(res => console.log(res))
  }

}
