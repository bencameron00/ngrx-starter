import { decrement, increment, reset } from '../../store/actions';

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/state';
import { countState } from '../../store/state';
import { selectCount } from '../../store/selectors';
import { selectUserName } from 'src/app/store/selectors';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  count$: Observable<any>;
  userName$: Observable<any> | undefined;
  constructor(
    private store: Store<{ count: countState }>,
    private appStore: Store<{ app: appState }>
  ) {
    this.count$ = store.select(selectCount);
    this.userName$ = appStore.select(selectUserName);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
