import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import {map, Observable, Subscription} from "rxjs";
import {PublicTransportService, RetType} from "../../services/widgets/publicTransport/public-transport.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MapsPopupComponent} from "../maps/maps-popup/maps-popup.component";
import {PublicTransportPopupComponent} from "./public-transport-popup/public-transport-popup.component";
import {
  PublicTransportConfigureOriginComponent
} from "./public-transport-configure-origin/public-transport-configure-origin.component";
import {UserConfigService} from "../../services/user-config/user-config.service";
@Component({
  selector: 'app-public-transport',
  templateUrl: './public-transport.component.html',
  styleUrls: ['./public-transport.component.sass']
})
export class PublicTransportComponent implements OnInit {

  title = 'public-transport';
  constructor(private dialog: MatDialog, private publicTransportService:PublicTransportService, private userConfigService:UserConfigService) { }
  ngOnInit() {
    this.origin = this.userConfigService.getPublicTransportOrigin()
    this.getData()
    /*
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    */
  }
  $data: Observable<Observable<RetType[]>> | undefined

  getData(){
    this.$data = this.publicTransportService.getInformationArray(this.origin)
    //const url ='https://www.kvv.de/tunnelEfaDirect.php?action=XSLT_DM_REQUEST&outputFormat=JSON&language=de&name_dm=7001004&type_dm=stopID&useRealtime=1'
    //const url = '/tunnelEfaDirect.php?action=XSLT_STOPFINDER_REQUEST&coordOutputFormat=WGS84[dd.ddddd]&name_sf=Karlsruhe%20Europaplatz&language=de&outputFormat=JSON&type_sf=stop&useRealtime=1'
    //const url = '/tunnelEfaDirect.php?action=XSLT_STOPFINDER_REQUEST&coordOutputFormat=JSON&name_sf=Karlsruhe%20Europaplatz&language=de&outputFormat=JSON&type_sf=stop&useRealtime=1&stopID=Karlsruhe%20central%20station'
    //const url = 'https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?outputFormat=JSON&coordOutputFormat=WGS84[dd.ddddd]&depType=stopEvents&locationServerActive=1&mode=direct&name_dm=7001001&type_dm=stop&useOnlyStops=1&useRealtime=1'
    //const url = 'https://api.deutschebahn.com/frahrplan-plus/v1/stations/Karlsruhe/departures?limit=10&lang=de'
    const url = 'https://api.deutschebahn.com/freeplan/v1/location/Karlsruhe'
    const detailUrl = 'https://api.deutschebahn.com/freeplan/v1/departureBoard/8000191?date=2022-05-05'
  }

  origin:string = ""
  moreInfoDialog(par:RetType) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "256px"; //entweder 256px als statischer Wert oder die Größe der Elemente des Dialogs anpassen
    const dialogRef = this.dialog.open(PublicTransportPopupComponent, {data:par});
  }

  configureOrigin() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "256px"; //entweder 256px als statischer Wert oder die Größe der Elemente des Dialogs anpassen
    const dialogRef = this.dialog.open(PublicTransportConfigureOriginComponent, dialogConfig);
  }
}
