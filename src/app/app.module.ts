import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {KtdGridModule} from "@katoid/angular-grid-layout";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WeatherComponent } from './widgets/weather/weather.component';
import { NasaComponent } from './widgets/nasa/nasa.component';
import { CartoonComponent } from './widgets/cartoon/cartoon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WidgetsComponent,
    WeatherComponent,
    NasaComponent,
    CartoonComponent
  ],
  imports: [
    BrowserModule,
    KtdGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
