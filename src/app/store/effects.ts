import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { setUserName, setUserNameSuccess } from './actions';

import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  loadUserName = createEffect(() => {
    return this.actions$.pipe(
      ofType(setUserName),
      switchMap((action) => {
        return of({ userName: action.userName + ' logged in OK' }).pipe(
          map((data) => {
            return setUserNameSuccess(data);
          }),
          catchError(() => of({ type: '[App Root] setUserNameError' })))
      })
    );
  });
}
