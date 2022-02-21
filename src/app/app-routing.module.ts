import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashComponent } from './page1/components/dash/dash.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'myApp', component: AppComponent },
  { path: 'dashboard', component: DashComponent },

  {
    path: 'page1',
    loadChildren: () =>
      import('./page1/page1.module').then((m) => m.Page1Module)
  },
  {
    path: 'page2',
    loadChildren: () =>
      import('./page2/page2.module').then((m) => m.Page2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
