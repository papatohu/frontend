import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateWidgetFormComponent } from './_template/template-widget-form/template-widget-form.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplateWidgetKvvComponent } from './_template/template-widget/template-widget-kvv/template-widget-kvv.component';
import { TemplateWidgetNasaComponent } from './_template/template-widget/template-widget-nasa/template-widget-nasa.component';
import { TemplateWidgetCartoonComponent } from './_template/template-widget/template-widget-cartoon/template-widget-cartoon.component';
import {TemplateWidgetWeatherComponent} from "./_template/template-widget/template-widget-weather/template-widget-weather.component";
import { YellPipe } from './yell.pipe';
import { TemplateWidgetMapsComponent } from './_template/template-widget/template-widget-maps/template-widget-maps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupConfigComponent } from './_template/template-widget/template-widget-maps/popup-config/popup-config.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateWidgetFormComponent,
    TemplateHeaderComponent,
    TemplateWidgetKvvComponent,
    TemplateWidgetNasaComponent,
    TemplateWidgetCartoonComponent,
    TemplateWidgetWeatherComponent,
    YellPipe,
    TemplateWidgetMapsComponent,
    PopupConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    DragDropModule
  ],
  exports: [
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
