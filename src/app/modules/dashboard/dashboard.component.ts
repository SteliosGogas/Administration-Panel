import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile'


export interface PeriodicElement {
  client_code: string;
  position: number;
  category: string;
  year: number;
  total_consumption_of_gas: string;
  value_of_gas : string;
  lan : string;
  lon: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, client_code: 'ΠΕ197234', category: 'Τ3B', year: 2016, total_consumption_of_gas: '878983,24' ,value_of_gas: '40472,54', lan:'40,6331643293735',lon:'22,9544653252695'},
  { position: 2, client_code: 'ΠΕ197596', category: 'Τ3B', year: 2016, total_consumption_of_gas: '365159,35', value_of_gas: '12750,64',lan:'40,6329724600705',lon:'22,9408531230477'}, 
  { position: 3, client_code: 'ΠΕ292122', category: 'Τ3B', year: 2016, total_consumption_of_gas: '205507,51',value_of_gas: '8075,6',lan:'40,6267736935401',lon:'22,9512629207105'},
  { position: 4, client_code: 'ΠΕ243059', category: 'T3D', year: 2016, total_consumption_of_gas: '75810,18', value_of_gas: '3633,63',lan:'40,576182', lon:'22,958593'},
  { position: 5, client_code: 'ΠΕ243544', category: 'T3D', year: 2016, total_consumption_of_gas: '67878,88', value_of_gas: '2795,9',lan:'40,595014', lon:'22,957374'},
  { position: 6, client_code: 'ΠΕ243009', category: 'T3D', year: 2016, total_consumption_of_gas: '144432,86',value_of_gas: '4821,95',lan:'40,611982', lon:'22,974028'},
  { position: 7, client_code: 'ΠΕ243345', category: 'T3D', year: 2016, total_consumption_of_gas:  '64567,09',value_of_gas: '2406,4',lan:'40,620295', lon:'22,96068'}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  map!:Map

  displayedColumns: string[] = ['position', 'client_code','category', 'year' , 'total_consumption_of_gas', 'value_of_gas', 'lan', 'lon'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator ;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
  }

}