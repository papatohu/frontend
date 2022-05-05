import {Component, OnInit} from '@angular/core';
import {KtdGridLayout, ktdTrackById} from '@katoid/angular-grid-layout';
import {UserConfigService} from "../services/user-config/user-config.service";
import {Observable} from "rxjs";
import {OutputType} from "../services/widgets/stocks/stocks.service";
import {KtdGridLayoutItem} from "@katoid/angular-grid-layout/lib/grid.definitions";

@Component({
  selector: 'app-widgets',
  templateUrl: 'widgets.component.html',
  styleUrls: ['widgets.component.sass']
})
export class WidgetsComponent implements OnInit{
  ngOnInit(): void {
    this.data$ = this.userService.getUser()
  }
  public data$: Observable<KtdGridLayout> | undefined;
  constructor(private userService:UserConfigService) {
  }
  postNewWidgetPositionsToBackend(layout: KtdGridLayout) {
    console.log(layout)
    this.userService.postNewWidgetPositionsToBackend(layout)
  }
  backendCall() {
    //set widgetPositions Object
  }
  private widgetPositions = {
    "weather": { "x": 0, "y": 0 },
    "nasa": { "x": 1.5, "y": 0 },
    "cartoon": { "x": 3, "y": 0 },
    "maps": { "x": 4.5, "y": 0 },
    "public_transport": { "x": 0, "y": 4 },
    "stocks": { "x": 1.5, "y": 4 },
    "text_of_the_day": { "x": 3, "y": 4 },
    "daily-news": { "x": 4.5, "y": 4 }
  }
  cols: number = 6;
  rowHeight: number = 100;
  layout: KtdGridLayout = [
    //{id: '0', x: 0, y: 0, w: 1, h: 2},
    //Weather-Widget
    {id: '1', x: this.widgetPositions.weather.x, y: this.widgetPositions.weather.y, w:1.5,h:4},
    //Nasa-Widget
    {id: '2', x: this.widgetPositions.nasa.x, y: this.widgetPositions.nasa.y, w:1.5,h:4 },
    //Cartoon-Widget
    {id: '3', x: this.widgetPositions.cartoon.x, y: this.widgetPositions.cartoon.y, w:1.5,h:4},
    //Maps-Widget
    {id: '4', x: this.widgetPositions.maps.x, y: this.widgetPositions.maps.y, w:1.5,h:4},
    //Public-Transport-Widget
    {id: '5', x: this.widgetPositions.public_transport.x, y: this.widgetPositions.public_transport.y, w:1.5,h:4},
    //Stocks-Widget
    {id: '6', x: this.widgetPositions.stocks.x, y: this.widgetPositions.stocks.y, w:1.5,h:4},
    //Text-of-the-day-Widget
    {id: '7', x: this.widgetPositions.text_of_the_day.x, y: this.widgetPositions.text_of_the_day.y, w:1.5,h:4},
    // Daily-News-Widget
    {id: '8', x: this.widgetPositions["daily-news"].x, y: this.widgetPositions["daily-news"].y, w:1.5,h:4},
  ];
  trackById = ktdTrackById
}
