import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import {Observable} from "rxjs";
import {OutputType, StocksService} from "../../services/widgets/stocks/stocks.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.sass']
})

export class StocksComponent implements OnInit {

  public data$: Observable<OutputType> | undefined;

  public chartOptions: ChartOptions;


  ngOnInit(): void {
    this.data$ = this.service.getDataArrayObservable2()
  }

  constructor(private service: StocksService) {

    this.chartOptions = {
      series: [
        {
          name: "candle",
          data: []
        }
      ],
      chart: {
        type: "candlestick",
        height: 350
      },
      title: {
        text: "CandleStick Chart",
        align: "left"
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    };
  }

}
