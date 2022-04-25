import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CartoonService} from "../../../services/cartoon/cartoon.service";

@Component({
  selector: 'app-cartoon-popup',
  templateUrl: './cartoon-popup.component.html',
  styleUrls: ['./cartoon-popup.component.sass']
})
export class CartoonPopupComponent implements OnInit {

  constructor(private http: HttpClient, private service: CartoonService) { }
  myimage = "";
  ngOnInit(): void {
    this.service.getInformation().subscribe(res => {this.myimage = res.img})
  }

}
