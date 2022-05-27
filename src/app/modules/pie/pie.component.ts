import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: any;
  // series: ApexNonAxisChartSeries;
  // chart: ApexChart;
  chart: any;
  responsive : any;
  // responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  // @Input() series!: ApexNonAxisChartSeries;
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22, 33, 8],
      chart: {
        width: 700,
        type: "pie"
      },
      labels: ["ΠΕ197596 - 365159,35", "ΠΕ197234 - 878983,24 ", "ΠΕ243544 - 67878,88", "ΠΕ292122 - 205507,51", "ΠΕ243059 - 75810,18", "ΠΕ243009 - 144432,86", "ΠΕ243345 - 64567,09"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}
