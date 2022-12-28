import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import tickerSymbols from '../../../../../server/data/tickerSymbols.json';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  
  tickerValue: string = "";
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
    return this.tickerValue = text;
  }

  onSubmit(form: NgForm) {
    
  }

}
