import { Component } from '@angular/core';
import {KtdGridLayout, ktdTrackById} from '@katoid/angular-grid-layout';

@Component({
  selector: 'app-widgets',
  templateUrl: 'widgets.component.html',
  styleUrls: ['widgets.component.sass']
})
export class WidgetsComponent {
  onLayoutUpdated(layout: KtdGridLayout) {
    console.log('on layout updated', layout);
    this.layout = layout;
  }
  backendCall() {
    //set widgetPositions Object
  }
  private widgetPositions = {
    "weather": { "x": 0, "y": 0 },
    "nasa": { "x": 0, "y": 1 },
    "cartoon": { "x": 0, "y": 2 },
    "maps": { "x": 0, "y": 3 },
    "public_transport": { "x": 0, "y": 4 },
    "stocks": { "x": 0, "y": 5 },
    "text_of_the_day": { "x": 0, "y": 6 }
  }
  cols: number = 6;
  rowHeight: number = 100;
  layout: KtdGridLayout = [
    //{id: '0', x: 0, y: 0, w: 1, h: 2},
    //Weather-Widget
    {id: '1', x: this.widgetPositions.weather.x, y: this.widgetPositions.weather.y, w: 1, h: 2},
    //Nasa-Widget
    {id: '2', x: this.widgetPositions.nasa.x, y: this.widgetPositions.nasa.y, w: 2.5, h: 4, minW: 2, minH: 3},
    //Cartoon-Widget
    {id: '3', x: this.widgetPositions.cartoon.x, y: this.widgetPositions.cartoon.y, w: 2.5, h: 4, minW: 2, maxW: 3, minH: 2, maxH: 5},
    //Maps-Widget
    {id: '4', x: this.widgetPositions.maps.x, y: this.widgetPositions.maps.y, w: 1, h: 1},
    //Public-Transport-Widget
    {id: '5', x: this.widgetPositions.public_transport.x, y: this.widgetPositions.public_transport.y, w: 2, h: 4, minW: 2, minH: 3},
    //Stocks-Widget
    {id: '6', x: this.widgetPositions.stocks.x, y: this.widgetPositions.stocks.y, w: 1, h: 1},
    //Text-of-the-day-Widget
    {id: '7', x: this.widgetPositions.text_of_the_day.x, y: this.widgetPositions.text_of_the_day.y, w: 1, h: 1},

  ];
  trackById = ktdTrackById
}
