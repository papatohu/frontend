import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NasaService} from "../../../services/nasa/nasa.service";

@Component({
  selector: 'app-popup-nasa',
  templateUrl: './popup-nasa.component.html',
  styleUrls: ['./popup-nasa.component.sass']
})
export class PopupNasaComponent implements OnInit {


  constructor(private http: HttpClient, private service: NasaService) { }
  myimage = "";
  ngOnInit(): void {
    this.service.getInformation().subscribe(res => {this.myimage = res.url})
  }

}
