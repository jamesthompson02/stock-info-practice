import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { nameSearchStateCounter,exchangeSearchStateCounter, countrySearchStateCounter, sectorSearchStateCounter,
        industrySearchStateCounter, yearHighSearchStateCounter, yearLowSearchStateCounter,
        fiftyDayMASearchStateCounter } from 'src/app/state/search/search.selectors';

@Component({
  selector: 'app-general-component',
  templateUrl: './general-component.component.html',
  styleUrls: ['./general-component.component.css']
})

export class GeneralComponentComponent {

  constructor( private store: Store) {}

  name$ = this.store.select(nameSearchStateCounter);
  exchange$ = this.store.select(exchangeSearchStateCounter);
  country$ = this.store.select(countrySearchStateCounter);
  sector$ = this.store.select(sectorSearchStateCounter);
  industry$ = this.store.select(industrySearchStateCounter);
  yearHigh$ = this.store.select(yearHighSearchStateCounter);
  yearLow$ = this.store.select(yearLowSearchStateCounter);
  fiftyDayMA$ = this.store.select(fiftyDayMASearchStateCounter);


}
