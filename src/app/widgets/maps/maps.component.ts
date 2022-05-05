import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MapsPopupComponent} from "./maps-popup/maps-popup.component";
import {MapsConfiguration} from "../../interfaces/user-config";
import {UserConfigService} from "../../services/user-config/user-config.service";
import {DomSanitizer, SafeHtml, SafeResourceUrl} from "@angular/platform-browser";


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.sass']
})
export class MapsComponent implements OnInit {
  @ViewChild('googleMaps') iframe: ElementRef | undefined;
  constructor(private dialog: MatDialog, private userConfigService:UserConfigService, private sanitizer:DomSanitizer) { }
  $data: MapsConfiguration | undefined
  origin = "";//Leerzeichen mit plus
  destination = "";//Leerzeichen mit plus
  mode = "";//driving,walking etc.
  avoid = "";//tolls|ferries|highways
  units = "";//metric,imperial
  api_base = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyB58SKmmu04kFriAI8WWhi8fT1yvJoVw-c"
  safeUrl: SafeResourceUrl | undefined
  ngOnInit(): void {
    this.setMapsIframe()
  }

  public setMapsIframe(): void {
    this.$data = this.userConfigService.getMapsData()
    let avoids = "&avoid="
    const data = this.$data
    data.avoid.length==0?avoids = "":data.avoid.forEach(val=>{data.avoid.indexOf(val)==(data.avoid.length-1)?
      avoids=avoids.concat(val):avoids=avoids.concat(val+"%7C")})
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.google.com/maps/embed/v1/directions?key=AIzaSyB58SKmmu04kFriAI8WWhi8fT1yvJoVw-c&origin=" +
      data.origin + "+Germany&destination=" + data.destination + "+Germany" + avoids + "&units=" +
      data.measurements + "&mode=" + data.mode)
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "256px"; //entweder 256px als statischer Wert oder die Größe der Elemente des Dialogs anpassen
    const dialogRef = this.dialog.open(MapsPopupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(()=>{this.setMapsIframe()})
  }

}
