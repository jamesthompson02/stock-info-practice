import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import stocks from '../../../../../server/data/filteredStocks.json';
import { Stock } from 'src/app/interfaces/stock';
import { selectFilterState } from 'src/app/state/stockFilter/stockFilter.selectors';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent {

  constructor( private store: Store ) {}

  columnDefs: ColDef[] = [
    {field: 'name', resizable: true, minWidth: 300, maxWidth: 500, sortable: true},
    {field: 'symbol', resizable: true, minWidth: 100, maxWidth: 300, sortable: true},
    {field: 'exchange', resizable: true, minWidth: 100, maxWidth: 300, sortable: true},
    {field: 'ipoDate', resizable: true, minWidth: 100, maxWidth: 300, sortable: true},

  ];

  rowData: Stock[] = stocks;
  
  filterReduxTerm$ = this.store.select(selectFilterState);

  filterReduxTermSubscription = this.filterReduxTerm$.subscribe((data: string) => {
    this.filterRowData(data);
  })


  filterRowData( filterTerm: string) {
    if (filterTerm.length > 0 ) {
      const copyOfStocks: Stock[] = [...stocks];
      let copyOfStocks2: Stock[] = [];
      for (let each of copyOfStocks) {
        if (each.name.toLowerCase().includes(filterTerm.toLowerCase())){
          copyOfStocks2.push(each);
        }
      }
      return this.rowData = copyOfStocks2;
    } else {
      return this.rowData = stocks;
    }
  }

}
