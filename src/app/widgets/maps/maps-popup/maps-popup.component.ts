import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {UserConfigService} from "../../../services/user-config/user-config.service";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {map, Observable, startWith} from "rxjs";
import {UserConfig} from "../../../interfaces/user-config";

@Component({
  selector: 'app-maps-popup',
  templateUrl: './maps-popup.component.html',
  styleUrls: ['./maps-popup.component.sass']
})
export class MapsPopupComponent implements OnInit {

  avoids = new FormControl();
  myControl = new FormControl();
  myControl2 = new FormControl();
  avoidsList: string[] = ['tolls','ferries','highways'];
  constructor(private dialog: MatDialog, private userConfigService:UserConfigService, public dialogRef: MatDialogRef<MapsPopupComponent>) {}

  origin = '';
  destination = '';
  mode = '';
  avoid:string[] = [];
  measurements = '';
  cityArray: string[]=[]
  onSubmit(event: any) {
    this.userConfigService.postMapsConfig(this.origin, this.destination, this.mode, this.avoid, this.measurements)
    this.userConfigService.setUserConfig(this.userConfigService.getUserConfig().pipe(map((userConfig:UserConfig)=>{
      userConfig.maps.mapsConfiguration.origin = this.origin
      userConfig.maps.mapsConfiguration.destination = this.destination
      userConfig.maps.mapsConfiguration.mode = this.mode
      userConfig.maps.mapsConfiguration.avoid = this.avoid
      userConfig.maps.mapsConfiguration.measurements = this.measurements
      return userConfig
    })))
    this.dialogRef.close()
  }
  filteredOptions: Observable<string[]> | undefined;
  filteredOptions2: Observable<string[]> | undefined;
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value))
    )
    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value))
    )
    this.userConfigService.getCityArray().subscribe(res=>this.cityArray = res)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if(value.length < 3)
      return []
    return this.cityArray.filter(option => option.toLowerCase().includes(filterValue));
  }
}
