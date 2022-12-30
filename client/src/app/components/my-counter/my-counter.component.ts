import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../state/counter/counter.actions';
import { Store } from '@ngrx/store';
import { CounterState } from 'src/app/state/counter/counter.reducer';
import { selectCounterStateCounter } from 'src/app/state/counter/counter.selectors';


@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$ = this.store.select(selectCounterStateCounter);


  
  constructor(private store: Store){}


  increment(addNumber: number) {
    this.store.dispatch(increment({ payload: addNumber}));
  }
 
  decrement(subtractNumber: number) {
    this.store.dispatch(decrement( { payload: subtractNumber}));
  }
 
  reset() {
    this.store.dispatch(reset());
  }

}
