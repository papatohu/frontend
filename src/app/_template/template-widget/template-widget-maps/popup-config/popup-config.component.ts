import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-popup-config',
  templateUrl: './popup-config.component.html',
  styleUrls: ['./popup-config.component.sass']
})
export class PopupConfigComponent implements OnInit {
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
