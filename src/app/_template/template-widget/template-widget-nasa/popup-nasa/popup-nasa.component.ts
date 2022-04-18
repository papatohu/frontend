import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-popup-nasa',
  templateUrl: './popup-nasa.component.html',
  styleUrls: ['./popup-nasa.component.sass']
})
export class PopupNasaComponent implements OnInit {


  url = "https://api.nasa.gov/planetary/apod?api_key=eMlRsZadzHAMCAKuxUGRYYTxa4ljuiF6KgggX9wa";
  constructor(private http: HttpClient) { }
  myimage = "";
  ngOnInit(): void {
    this.http.get<any>(this.url).subscribe(res => {this.myimage = res.url})
  }

}
