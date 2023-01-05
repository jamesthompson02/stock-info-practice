import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSearchStateCounter } from 'src/app/state/search/search.selectors';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Response1 } from 'src/app/interfaces/response';
import { newROE, newName, newExchange, newCountry, newSector, newIndustry,
        newYearHigh, newYearLow, newFiftyDayMA } from 'src/app/state/search/search.actions';

@Component({
  selector: 'app-value-widget',
  templateUrl: './value-widget.component.html',
  styleUrls: ['./value-widget.component.css']
})
export class ValueWidgetComponent {

  constructor(private store: Store, private http: HttpClient) {}

  
  reduxSearchTerm$ = this.store.select(selectSearchStateCounter);
  name =  null;
  priceToEarnings = null;
  pegRatio = null;
  priceToBook = null;
  debtToEquity = null;

  header1 = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  options = {
    headers: this.header1
  }

  subscription = this.reduxSearchTerm$.subscribe(data => {
    this.apiCall(data);
  })

  submitNewROE(roe: string | number) {
    this.store.dispatch(newROE({payload: roe}));
  }

  submitNewName(name: string) {
    this.store.dispatch(newName({payload: name}));
  }

  submitNewExchange(exchange: string) {
    this.store.dispatch(newExchange({payload: exchange}));
  }

  submitNewCountry(country: string) {
    this.store.dispatch(newCountry({payload: country}));
  }

  submitNewSector(sector: string) {
    this.store.dispatch(newSector({payload: sector}));
  }

  submitNewIndustry(industry: string) {
    this.store.dispatch(newIndustry({payload: industry}));
  }

  submitNewYearHigh(yearHigh: string) {
    this.store.dispatch(newYearHigh({payload: yearHigh}));
  }

  submitNewYearLow(yearLow: string) {
    this.store.dispatch(newYearLow({payload: yearLow}));
  }

  submitNewFiftyDayMA(fiftyDayMA: string) {
    this.store.dispatch(newFiftyDayMA({payload: fiftyDayMA}));
  }


  apiCall( stockName: string ) {
    this.http.post('http://localhost:5000/api/stock/value', JSON.stringify({stock: stockName}), this.options)
    .subscribe((res: Response1) => {
      this.debtToEquity = res.debtToEquity;
      this.name = res.name;
      this.pegRatio = res.pegRatio;
      this.priceToEarnings = res.priceToEarnings;
      this.priceToBook = res.priceToBook;
      this.submitNewROE(res.roe);
      this.submitNewName(res.name);
      this.submitNewCountry(res.country);
      this.submitNewExchange(res.exchange);
      this.submitNewSector(res.sector);
      this.submitNewIndustry(res.industry);
      this.submitNewYearHigh(res.yearHigh);
      this.submitNewYearLow(res.yearLow);
      this.submitNewFiftyDayMA(res.fiftyDayMA);

      console.log(res);
    })
  }


}
