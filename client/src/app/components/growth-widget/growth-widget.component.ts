import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSearchStateCounter } from 'src/app/state/search/search.selectors';

@Component({
  selector: 'app-growth-widget',
  templateUrl: './growth-widget.component.html',
  styleUrls: ['./growth-widget.component.css']
})
export class GrowthWidgetComponent {
  reduxSearchTerm$ = this.store.select(selectSearchStateCounter);

  constructor(private store: Store) {}
}
