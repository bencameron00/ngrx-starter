import { CommonModule } from '@angular/common';
import { Component1Component } from './components/component1/component1.component';
import { NgModule } from '@angular/core';
import { Page2RoutingModule } from './page2-routing.module';

@NgModule({
  declarations: [Component1Component],
  imports: [CommonModule, Page2RoutingModule]
})
export class Page2Module {}
