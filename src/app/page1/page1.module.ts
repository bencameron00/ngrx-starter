import { AppEffects } from './store/effects';
import { CommonModule } from '@angular/common';
import { Component1Component } from './components/component1/component1.component';
import { DashComponent } from './components/dash/dash.component';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { Page1RoutingModule } from './page1-routing.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [Component1Component, DashComponent],
  imports: [
    CommonModule,
    Page1RoutingModule,
    EffectsModule.forFeature([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature('countState', counterReducer),
    ReactiveComponentModule
  ]
})
export class Page1Module {}
