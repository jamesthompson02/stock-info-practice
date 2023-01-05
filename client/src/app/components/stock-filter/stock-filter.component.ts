import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFilterState } from 'src/app/state/stockFilter/stockFilter.selectors';
import { filter } from 'src/app/state/stockFilter/stockFilter.actions';

@Component({
  selector: 'app-stock-filter',
  templateUrl: './stock-filter.component.html',
  styleUrls: ['./stock-filter.component.css']
})
export class StockFilterComponent {

  constructor(private store: Store) {}

  filterTerm$ = this.store.select(selectFilterState);

  updateReduxFilterTerm(filterTerm: string) {
    this.store.dispatch(filter({payload: filterTerm}));
  }



}
