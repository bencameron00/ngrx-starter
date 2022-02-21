import { RouterModule, Routes } from '@angular/router';

import { Component1Component } from './components/component1/component1.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: Component1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page2RoutingModule {}
