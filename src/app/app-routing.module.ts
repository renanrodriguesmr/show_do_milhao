import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialViewComponent } from './initial-view/initial-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: InitialViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
