import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
