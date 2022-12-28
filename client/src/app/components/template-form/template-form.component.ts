import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import tickerSymbols from '../../../../../server/data/tickerSymbols.json';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  constructor(private http: HttpClient) {
    
  }

  header1 = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  options = {
    headers: this.header1
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

  onSubmit(form: NgForm) {
    this.http.post('http://localhost:5000/api/stock', JSON.stringify({stock: this.tickerValueLowerCase}), this.options)
    .subscribe((res) => {
      console.log(res);
    })
    
  }

}
