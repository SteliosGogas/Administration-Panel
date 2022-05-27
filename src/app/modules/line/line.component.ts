import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  // series: ApexAxisChartSeries;
  // chart: ApexChart;
  // xaxis: ApexXAxis;
  // dataLabels: ApexDataLabels;
  // grid: ApexGrid;
  // stroke: ApexStroke;
  // title: ApexTitleSubtitle;
  series: any;
  chart: any;
  xaxis: any;
  dataLabels: any;
  grid: any;
  stroke: any;
  title: any;
};

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "Value of gas",
          data: [40472.54, 12750.64, 8075.60, 3633.63
            , 2795.90, 4821.95, 2406.40]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Value of gas per client",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "ΠΕ197234",
          "ΠΕ197596",     
          "ΠΕ292122",
          "ΠΕ243059",
          "ΠΕ243544",
          "ΠΕ243009",
          "ΠΕ243345"
        ]
      }
    };
  }

  ngOnInit(): void {
  }

}
