import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSearchStateCounter } from 'src/app/state/search/search.selectors';

@Component({
  selector: 'app-value-widget',
  templateUrl: './value-widget.component.html',
  styleUrls: ['./value-widget.component.css']
})
export class ValueWidgetComponent {

  reduxSearchTerm$ = this.store.select(selectSearchStateCounter);

  constructor(private store: Store) {}

}
