import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-maps-popup',
  templateUrl: './maps-popup.component.html',
  styleUrls: ['./maps-popup.component.sass']
})
export class MapsPopupComponent implements OnInit {

  avoids = new FormControl();

  avoidsList: string[] = ['tolls','ferries','highways'];
  constructor(private dialog: MatDialog) {}

  origin = '';
  destination = '';
  mode = '';
  avoid = '';
  measurements = '';
  ngOnInit(): void {
  }
  onSubmit(event: any) {
    this.dialog.closeAll();
  }

}
