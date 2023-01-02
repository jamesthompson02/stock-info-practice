import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSearchStateCounter } from 'src/app/state/search/search.selectors';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Response1 } from 'src/app/interfaces/response';

@Component({
  selector: 'app-value-widget',
  templateUrl: './value-widget.component.html',
  styleUrls: ['./value-widget.component.css']
})
export class ValueWidgetComponent {

  constructor(private store: Store, private http: HttpClient) {}

  
  reduxSearchTerm$ = this.store.select(selectSearchStateCounter);
  name$ =  null;
  priceToEarnings$ = null;
  pegRatio$ = null;
  priceToBook$ = null;
  debtToEquity$ = null;

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
    this.http.post('http://localhost:5000/api/stock/value', JSON.stringify({stock: stockName}), this.options)
    .subscribe((res) => {
      let arr2 = Object.values(res);
      let newObj: Response1 = {
        name: null,
        priceToEarnings: null,
        pegRatio: null,
        priceToBook: null,
        debtToEquity: null
      };
      newObj.name = arr2[0];
      newObj.priceToEarnings = arr2[1];
      newObj.pegRatio = arr2[2];
      newObj.priceToBook = arr2[3];
      newObj.debtToEquity = arr2[4];
      this.debtToEquity$ = newObj.debtToEquity;
      this.name$ = newObj.name;
      this.pegRatio$ = newObj.pegRatio;
      this.priceToEarnings$ = newObj.priceToEarnings;
      this.priceToBook$ = newObj.priceToBook;
      

    })
  }


}
