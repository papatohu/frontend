import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PopupNasaComponent} from "./popup-nasa/popup-nasa.component";
import {NasaService} from "../../services/nasa/nasa.service";


@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.sass']
})
export class NasaComponent implements OnInit {

  title = 'NASA Picture of the day';

  goNasa() {
    window.location.href='https://www.nasa.gov/multimedia/imagegallery/iotd.html';
  }

  showImage() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "max-content"; //entweder 256px als statischer Wert oder die Größe der Elemente des Dialogs anpassen
    dialogConfig.maxWidth = "max-content";
    this.dialog.open(PopupNasaComponent, dialogConfig);
  }

  constructor(private service: NasaService, private http: HttpClient, private dialog: MatDialog) { }

  myimage = "";
  explanation= "";
  imgtitle = "";
  ngOnInit(): void {
    this.service.getInformation().subscribe(res => {
      this.myimage = res.url;
      this.imgtitle = res.title;
      this.explanation = res.explanation
    })
  }

}
