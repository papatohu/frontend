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

  cols: number = 6;
  rowHeight: number = 100;
  layout: KtdGridLayout = [
    {id: '0', x: 0, y: 0, w: 1, h: 2},
    {id: '1', x: 3, y: 0, w: 2, h: 3},
    {id: '2', x: 0, y: 3, w: 1, h: 3, minW: 2, minH: 3},
    {id: '3', x: 3, y: 3, w: 3, h: 1, minW: 2, maxW: 3, minH: 2, maxH: 5},
  ];
  trackById = ktdTrackById
}
