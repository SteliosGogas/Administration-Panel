import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PieComponent } from 'src/app/modules/pie/pie.component';
import { LineComponent } from 'src/app/modules/line/line.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

import { OlMapsModule } from 'src/app/modules/ol-maps/ol-maps.module';
import { NgApexchartsModule } from "ng-apexcharts";
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { 
	IgxPieChartModule,
	IgxLegendModule,
	IgxItemLegendModule
 } from "igniteui-angular-charts";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PieComponent,
    LineComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    IgxPieChartModule,
    IgxLegendModule,
    IgxItemLegendModule,
    NgApexchartsModule,
    OlMapsModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }