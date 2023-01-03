import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSearchStateCounter } from 'src/app/state/search/search.selectors';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { GrowthResponse } from 'src/app/interfaces/growthResponse';

@Component({
  selector: 'app-growth-widget',
  templateUrl: './growth-widget.component.html',
  styleUrls: ['./growth-widget.component.css']
})
export class GrowthWidgetComponent {

  constructor(private store: Store, private http: HttpClient) {}

  reduxSearchTerm$ = this.store.select(selectSearchStateCounter);
  name =  null;
  preTaxMarginGrowth = null;
  netIncomeGrowth = null;
  ROE = null;
  sharePriceGrowth = null;

  header1 = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  options = {
    headers: this.header1
  }

  subscription = this.reduxSearchTerm$.subscribe(data => {
    this.apiCall(data);
  })

  apiCall( stockName: string ) {
    this.http.post('http://localhost:5000/api/stock/growth', JSON.stringify({stock: stockName}), this.options)
    .subscribe((res: GrowthResponse) => {
      this.name = res.name;
      this.preTaxMarginGrowth = (parseInt(res.preTaxMarginGrowth)/1000000).toFixed(2);
      this.ROE = res.ROE;
      this.sharePriceGrowth = res.sharePriceGrowth;
      this.netIncomeGrowth = (parseInt(res.netIncomeGrowth)/1000000).toFixed(2);
    })
  }

  
}
