import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import tickerSymbols from '../../../../../server/data/tickerSymbols.json';


import { newSearch } from 'src/app/state/search/search.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-widget-container-form',
  templateUrl: './widget-container-form.component.html',
  styleUrls: ['./widget-container-form.component.css']
})
export class WidgetContainerFormComponent {

  constructor(private store: Store) {
    
  }

  tickerValue: string = "";
  tickerValueLowerCase: string = "";
  tickerSymbol: string = "";
  tickerInputStatus: boolean = false;
  allTickerSymbols: string[] = tickerSymbols;

  


  onInput(text: string) {
    this.tickerSymbol = text.toUpperCase();
    if (this.allTickerSymbols.includes(this.tickerSymbol)) {
      this.tickerInputStatus = true;
    } else {
      this.tickerInputStatus = false;
    }
    this.tickerValue = text;
    return this.tickerValueLowerCase = this.tickerValue.toLowerCase();
  }

  inputTickerSymbol(tickerSymbol1: string) {
    this.store.dispatch(newSearch({ payload: tickerSymbol1}))
  }

  onSubmit(form: NgForm) {
    this.inputTickerSymbol(this.tickerValueLowerCase);
  }

}
