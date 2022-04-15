import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-template-widget-nasa',
  templateUrl: './template-widget-nasa.component.html',
  styleUrls: ['./template-widget-nasa.component.sass']
})
export class TemplateWidgetNasaComponent implements OnInit {

  title = 'NASA Picture of the day';

  goNasa() {
    window.location.href='https://www.nasa.gov/multimedia/imagegallery/iotd.html';
  }

  constructor(private http: HttpClient) { }

  url = "https://api.nasa.gov/planetary/apod?api_key=eMlRsZadzHAMCAKuxUGRYYTxa4ljuiF6KgggX9wa";
  myimage = "";
  explanation= "";
  imgtitle = "";
  ngOnInit(): void {
    this.http.get<any>(this.url).subscribe(res => {this.myimage = res.url; this.explanation = res.explanation; this.imgtitle = res.title})
  }

}
