import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CartoonService} from "../../services/cartoon/cartoon.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MapsPopupComponent} from "../maps/maps-popup/maps-popup.component";
import {CartoonPopupComponent} from "./cartoon-popup/cartoon-popup.component";

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

  constructor(private http: HttpClient, private service:CartoonService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getInformation().subscribe(res => {this.myimage = res.img})
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "max-content"; //entweder 256px als statischer Wert oder die Größe der Elemente des Dialogs anpassen
    dialogConfig.maxWidth = "max-content";
    this.dialog.open(CartoonPopupComponent, dialogConfig);

  }

}
