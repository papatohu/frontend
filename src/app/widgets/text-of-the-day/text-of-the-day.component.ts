import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-text-of-the-day',
  templateUrl: './text-of-the-day.component.html',
  styleUrls: ['./text-of-the-day.component.sass']
})
export class TextOfTheDayComponent implements OnInit {

  constructor(private http: HttpClient) { }
  mottext = "";
  ngOnInit(): void {
    this.http.get<any>("/api/random").subscribe(res => {
        this.mottext = res[0]["q"]
      }
    )
  }

}
