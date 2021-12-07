import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-widget-nasa',
  templateUrl: './template-widget-nasa.component.html',
  styleUrls: ['./template-widget-nasa.component.sass']
})
export class TemplateWidgetNasaComponent implements OnInit {

  title = 'NASA Picture of the day';

  goNasa() {
    window.location.href='https://apod.nasa.gov/apod/astropix.html/';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
