import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {RetType} from "../../../services/widgets/publicTransport/public-transport.service";

@Component({
  selector: 'app-public-transport-popup',
  templateUrl: './public-transport-popup.component.html',
  styleUrls: ['./public-transport-popup.component.sass']
})
export class PublicTransportPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:RetType) {}

  ngOnInit(): void {
  }

}
