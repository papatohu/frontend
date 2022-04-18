import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-template-widget-motivational-texts',
  templateUrl: './template-widget-motivational-texts.component.html',
  styleUrls: ['./template-widget-motivational-texts.component.sass']
})
export class TemplateWidgetMotivationalTextsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  mottext = "";
  ngOnInit(): void {
    this.http.get<any>("/api/today").subscribe(res => {
      this.mottext = res[0]["q"]
    }
    )
  }
}
