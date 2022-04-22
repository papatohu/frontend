import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CartoonService} from "../../services/cartoon/cartoon.service";

@Component({
  selector: 'app-cartoon',
  templateUrl: './cartoon.component.html',
  styleUrls: ['./cartoon.component.sass']
})
export class CartoonComponent implements OnInit {

  title = 'XKCD Cartoon of the day';
  myimage = "";

  goCartoon() {
    window.location.href='https://xkcd.com/';
  }

  constructor(private http: HttpClient, private service:CartoonService) { }

  ngOnInit(): void {
    this.service.getInformation().subscribe(res => {this.myimage = res.img})
  }

}
