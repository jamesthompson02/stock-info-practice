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
    {field: 'name', resizable: true, width: 500},
    {field: 'symbol'},
    {field: 'exchange'},
    {field: 'ipoDate'},

  ];

  rowData: Stock[] = stocks;

  

}
