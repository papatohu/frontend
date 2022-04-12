import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {PopupConfigComponent} from "./popup-config/popup-config.component";

@Component({
  selector: 'app-template-widget-maps',
  templateUrl: './template-widget-maps.component.html',
  styleUrls: ['./template-widget-maps.component.sass']
})
export class TemplateWidgetMapsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  origin = "";//Leerzeichen mit plus
  destination = "";//Leerzeichen mit plus
  mode = "";//driving,walking etc.
  avoid = "";//tolls|ferries|highways
  units = "";//metric,imperial

  api_base = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyB58SKmmu04kFriAI8WWhi8fT1yvJoVw-c"

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "256px"; //entweder 256px als statischer Wert oder die Größe der Elemente des Dialogs anpassen
    this.dialog.open(PopupConfigComponent, dialogConfig);

  }

}
