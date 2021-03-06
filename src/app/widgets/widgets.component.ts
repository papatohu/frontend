import {Component, OnInit} from '@angular/core';
import {KtdGridLayout, ktdTrackById} from '@katoid/angular-grid-layout';
import {UserConfigService} from "../services/user-config/user-config.service";
import {Observable} from "rxjs";
import {OutputType} from "../services/widgets/stocks/stocks.service";
import {KtdGridLayoutItem} from "@katoid/angular-grid-layout/lib/grid.definitions";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-widgets',
  templateUrl: 'widgets.component.html',
  styleUrls: ['widgets.component.sass']
})
export class WidgetsComponent implements OnInit{
  ngOnInit(): void {
    this.userService.initUser()
    this.layout2 = this.userService.getUserGridLayoutMapping()
  }
  public layout2: Observable<KtdGridLayout> | undefined
  constructor(private userService:UserConfigService, private http:HttpClient) {
  }
  postNewWidgetPositionsToBackend(layout: KtdGridLayout) {
    console.log(layout)
    this.userService.postNewWidgetPositionsToBackend(layout)
  }
  private widgetPositions = {
    "weather": { "x": 3, "y": 5 },
    "nasa": { "x": 3, "y": 0 },
    "cartoon": { "x": 6, "y": 0 },
    "maps": { "x": 9, "y": 0 },
    "public_transport": { "x": 0, "y": 0 },
    "stocks": { "x": 3, "y": 4 },
    "text_of_the_day": { "x": 6, "y": 4 },
    "daily-news": { "x": 9, "y": 4 },
    "chuck": { "x": 6, "y": 5 },
    "tronaldDump": { "x": 9, "y": 5 },
  }
  cols: number = 12;
  rowHeight: number = 100;
  layout: KtdGridLayout = [
    //{id: '0', x: 0, y: 0, w: 1, h: 2},
    //Weather-Widget
    {id: '1', x: this.widgetPositions.weather.x, y: this.widgetPositions.weather.y, w:3,h:4},
    //Nasa-Widget
    {id: '2', x: this.widgetPositions.nasa.x, y: this.widgetPositions.nasa.y, w:3,h:4 },
    //Cartoon-Widget
    {id: '3', x: this.widgetPositions.cartoon.x, y: this.widgetPositions.cartoon.y, w:3,h:4},
    //Maps-Widget
    {id: '4', x: this.widgetPositions.maps.x, y: this.widgetPositions.maps.y, w:3,h:4},
    //Public-Transport-Widget
    {id: '5', x: this.widgetPositions.public_transport.x, y: this.widgetPositions.public_transport.y, w:3,h:12},
    //Stocks-Widget
    {id: '6', x: this.widgetPositions.stocks.x, y: this.widgetPositions.stocks.y, w:3,h:4},
    //Text-of-the-day-Widget
    {id: '7', x: this.widgetPositions.text_of_the_day.x, y: this.widgetPositions.text_of_the_day.y, w:3,h:4},
    // Daily-News-Widget
    {id: '8', x: this.widgetPositions["daily-news"].x, y: this.widgetPositions["daily-news"].y, w:3,h:4},
    //Chuck-Widget
    {id: '9', x: this.widgetPositions.chuck.x, y: this.widgetPositions.chuck.y, w:3,h:4},
    //Tronald-Dump-Widget
    {id: '10', x: this.widgetPositions.tronaldDump.x, y: this.widgetPositions.tronaldDump.y, w:3,h:4},

  ];
  trackById = ktdTrackById
}
