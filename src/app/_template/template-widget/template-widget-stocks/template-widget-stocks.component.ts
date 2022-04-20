import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {WidgetStocksService} from "../../../_service/widgets/widget-stocks/widget-stocks.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ WidgetStocksService ],
  selector: 'app-template-widget-stocks',
  templateUrl: './template-widget-stocks.component.html',
  styleUrls: ['./template-widget-stocks.component.sass']
})
export class TemplateWidgetStocksComponent implements OnInit {

  constructor(private service: WidgetStocksService) {
    this.stocksData = [this.service.getInformation()]}

  public stocksData: any;
  ngOnInit(): void {
  }

}
