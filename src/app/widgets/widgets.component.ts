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
    "cartoon": { "x": 0, "y": 2 }
  }
  cols: number = 6;
  rowHeight: number = 100;
  layout: KtdGridLayout = [
    //{id: '0', x: 0, y: 0, w: 1, h: 2},
    //Weather-Widget
    {id: '1', x: this.widgetPositions.weather.x, y: this.widgetPositions.weather.y, w: 1, h: 1},
    //Nasa-Widget
    {id: '2', x: this.widgetPositions.nasa.x, y: this.widgetPositions.nasa.y, w: 1, h: 1, minW: 2, minH: 3},
    //Cartoon-Widget
    {id: '3', x: this.widgetPositions.cartoon.x, y: this.widgetPositions.cartoon.y, w: 1, h: 1, minW: 2, maxW: 3, minH: 2, maxH: 5},
  ];
  trackById = ktdTrackById
}
