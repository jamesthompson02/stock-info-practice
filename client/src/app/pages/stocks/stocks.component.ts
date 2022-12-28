import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import stocks from '../../../../../server/data/stocks.json';
import { Stock } from 'src/app/interfaces/stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent {

  // export interface Stock {
  //   name: string,
  //   symbol: string,
  //   exchange: string,
  //   ipoDate: string
  // }

  columnDefs: ColDef[] = [
    {field: 'name', resizable: true, minWidth: 300, maxWidth: 500, sortable: true},
    {field: 'symbol', resizable: true, minWidth: 100, maxWidth: 300, sortable: true},
    {field: 'exchange', resizable: true, minWidth: 100, maxWidth: 300, sortable: true},
    {field: 'ipoDate', resizable: true, minWidth: 100, maxWidth: 300, sortable: true},

  ];

  rowData: Stock[] = stocks;

  

}
