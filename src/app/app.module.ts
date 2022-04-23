import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PopupNasaComponent} from "./widgets/nasa/popup-nasa/popup-nasa.component";
import { MapsPopupComponent } from './widgets/maps/maps-popup/maps-popup.component';

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
    PopupNasaComponent,
    MapsPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    KtdGridModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
