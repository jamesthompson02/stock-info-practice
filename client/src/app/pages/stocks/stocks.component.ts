import { Component } from '@angular/core';
import { ColDef, GridApi, GridOptions, GridReadyEvent, GridSizeChangedEvent } from 'ag-grid-community';
import stocks from '../../../../../server/data/filteredStocks.json';
import newData from '../../../../../server/data/newData.json';
import { Stock } from 'src/app/interfaces/stock';
import { selectFilterState } from 'src/app/state/stockFilter/stockFilter.selectors';
import { Store } from "@ngrx/store";
import 'ag-grid-enterprise';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent {

  constructor( private store: Store ) {}

  private gridApi: GridApi;

  public rowSelection : 'single' | 'multiple' = 'multiple';

  gridOptions: GridOptions = {
    enableRangeSelection: true,
    onCellClicked: (params) => {
      console.log(params.value);
      if (params.column.getColId() === "Description") {
        console.log("description");
       
      } else {
        console.log('not description');

      }      
    }
    
  }

  defaultColumnDefs = {
    resizable: true, 
    minWidth: 15,
    maxWidth: 500,
    sortable: true,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true
  }
  
  columnDefs: ColDef[] = [
    {
      field: 'Name',
      checkboxSelection: true,
    },
    {
      field: 'Symbol'
    },
    {
      field: 'Exchange',
    },
    {
      field: 'PERatio',
      headerName: 'Price/Earnings Ratio',
      type: 'numericColumn'
    },
    {
      field: 'Description',
      maxWidth: 1000,
      flex: 1
    },

  ];

  rowData: Stock[] = newData;

  onGridReady (params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
  }

  onGridSizeChange ( params: GridSizeChangedEvent ) {
    params.api.sizeColumnsToFit();
    params.api.onRowHeightChanged();

  } 
  
  // filterReduxTerm$ = this.store.select(selectFilterState);

  // filterReduxTermSubscription = this.filterReduxTerm$.subscribe((data: string) => {
  //   this.filterRowData(data);
  // })


  // filterRowData( filterTerm: string) {
  //   if (filterTerm.length > 0 ) {
  //     const copyOfStocks: Stock[] = [...stocks];
  //     let copyOfStocks2: Stock[] = [];
  //     for (let each of copyOfStocks) {
  //       if (each.name.toLowerCase().includes(filterTerm.toLowerCase())){
  //         copyOfStocks2.push(each);
  //       }
  //     }
  //     return this.rowData = copyOfStocks2;
  //   } else {
  //     return this.rowData = stocks;
  //   }
  // }

}
