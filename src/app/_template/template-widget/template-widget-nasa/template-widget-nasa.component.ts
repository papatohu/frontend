import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PopupConfigComponent} from "../template-widget-maps/popup-config/popup-config.component";
import {PopupNasaComponent} from "./popup-nasa/popup-nasa.component";
import {WidgetNasaService} from "../../../_service/widgets/widget-nasa/widget-nasa.service";
import {Widget} from "../../../_interface/widget";

@Component({
  selector: 'app-template-widget-nasa',
  templateUrl: './template-widget-nasa.component.html',
  styleUrls: ['./template-widget-nasa.component.sass']
})
export class TemplateWidgetNasaComponent implements OnInit {

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

  constructor(private service: WidgetNasaService, private http: HttpClient, private dialog: MatDialog) { }

  url = "https://api.nasa.gov/planetary/apod?api_key=eMlRsZadzHAMCAKuxUGRYYTxa4ljuiF6KgggX9wa";
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
