import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateWidgetComponent } from './_template/template-widget/template-widget.component';
import { TemplateWidgetFormComponent } from './_template/template-widget-form/template-widget-form.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplateWidgetKvvComponent } from './_template/template-widget/template-widget-kvv/template-widget-kvv.component';
import { TemplateWidgetNasaComponent } from './_template/template-widget/template-widget-nasa/template-widget-nasa.component';
import { TemplateWidgetCartoonComponent } from './_template/template-widget/template-widget-cartoon/template-widget-cartoon.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateWidgetComponent,
    TemplateWidgetFormComponent,
    TemplateHeaderComponent,
    TemplateWidgetKvvComponent,
    TemplateWidgetNasaComponent,
    TemplateWidgetCartoonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
