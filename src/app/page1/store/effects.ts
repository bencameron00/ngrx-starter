import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { increment } from './actions';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment),
      mergeMap(() =>
        of(true).pipe(
          map((data) => {
            return { type: '[Counter Component] effectSuccess', payload: data };
          }),
          catchError(() => of({ type: '[Counter Component] effectError' }))
        )
      )
    )
  );
}
