import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSearchStateCounter } from 'src/app/state/search/search.selectors';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-growth-widget',
  templateUrl: './growth-widget.component.html',
  styleUrls: ['./growth-widget.component.css']
})
export class GrowthWidgetComponent {

  constructor(private store: Store, private http: HttpClient) {}

  reduxSearchTerm$ = this.store.select(selectSearchStateCounter);

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
    .subscribe((res) => {
      console.log(res);
    })
  }

  
}
