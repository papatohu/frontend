import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-template-widget-kvv',
  templateUrl: './template-widget-kvv.component.html',
  styleUrls: ['./template-widget-kvv.component.sass']

})
export class TemplateWidgetKvvComponent implements OnInit {
  title = 'KVV Abfahrtsmonitor';
  constructor(private http: HttpClient) {

  }

  apiRoot: string = "https://live.kvv.de/webapp/API_BASE/stops/bylatlon/8.001/42.002?key=377d840e54b59adbe53608ba1aad70e8";

  public getKVVInfo(url: string): any {

    var temp;
    this.http.get(url).subscribe(res => console.log(res));
    return temp
  }

  public onClick(): void {
    var temp  = this.getKVVInfo(this.apiRoot);
    alert(temp)
  }

  ngOnInit(): void {
  }

}
