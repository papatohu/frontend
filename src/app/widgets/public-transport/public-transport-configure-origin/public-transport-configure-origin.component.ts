import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {UserConfigService} from "../../../services/user-config/user-config.service";

@Component({
  selector: 'app-public-transport-configure-origin',
  templateUrl: './public-transport-configure-origin.component.html',
  styleUrls: ['./public-transport-configure-origin.component.sass']
})
export class PublicTransportConfigureOriginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PublicTransportConfigureOriginComponent>, private userConfigService:UserConfigService) { }
  origin:string = ""
  ngOnInit(): void {
  }

  onSubmit($event: any) {
    this.userConfigService.setPublicTransportOrigin(this.origin)
    this.dialogRef.close()
  }
}
