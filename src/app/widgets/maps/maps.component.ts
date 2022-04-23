import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MapsPopupComponent} from "./maps-popup/maps-popup.component";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.sass']
})
export class MapsComponent implements OnInit {

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
    this.dialog.open(MapsPopupComponent, dialogConfig);

  }

}
