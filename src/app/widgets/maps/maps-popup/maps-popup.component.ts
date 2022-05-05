import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {UserConfigService} from "../../../services/user-config/user-config.service";

@Component({
  selector: 'app-maps-popup',
  templateUrl: './maps-popup.component.html',
  styleUrls: ['./maps-popup.component.sass']
})
export class MapsPopupComponent implements OnInit {

  avoids = new FormControl();

  avoidsList: string[] = ['tolls','ferries','highways'];
  constructor(private dialog: MatDialog, private userConfigService:UserConfigService, public dialogRef: MatDialogRef<MapsPopupComponent>) {}

  origin = '';
  destination = '';
  mode = '';
  avoid:string[] = [];
  measurements = '';
  ngOnInit(): void {
  }
  onSubmit(event: any) {
    this.userConfigService.postMapsConfig(this.origin, this.destination, this.mode, this.avoid, this.measurements)
    this.dialogRef.close()
  }

}
