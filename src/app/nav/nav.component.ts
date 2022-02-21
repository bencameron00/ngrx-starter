import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from '../store/state';
import { selectUserName } from './../store/selectors';
import { setUserName } from '../store/actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  public userName$: Observable<any> | undefined;

  constructor(
    // eslint-disable-next-line no-unused-vars
    private breakpointObserver: BreakpointObserver,
    private store: Store<{ app: appState }>
  ) {}

  ngOnInit() {
    this.userName$ = this.store.select(selectUserName);
  }

  onClick(userName: string) {
    this.store.dispatch(setUserName({ userName: userName }));
  }
}
