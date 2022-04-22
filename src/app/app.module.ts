import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {KtdGridModule} from "@katoid/angular-grid-layout";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WeatherComponent } from './widgets/weather/weather.component';
import { NasaComponent } from './widgets/nasa/nasa.component';
import { CartoonComponent } from './widgets/cartoon/cartoon.component';
import { PublicTransportComponent } from './widgets/public-transport/public-transport.component';
import { MapsComponent } from './widgets/maps/maps.component';
import { TextOfTheDayComponent } from './widgets/text-of-the-day/text-of-the-day.component';
import { StocksComponent } from './widgets/stocks/stocks.component';


import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from "@angular/material/dialog";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PopupNasaComponent} from "./widgets/nasa/popup-nasa/popup-nasa.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WidgetsComponent,
    WeatherComponent,
    NasaComponent,
    CartoonComponent,
    PublicTransportComponent,
    MapsComponent,
    TextOfTheDayComponent,
    StocksComponent,
    PopupNasaComponent
  ],
  imports: [
    BrowserModule,
    KtdGridModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  exports: [
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
