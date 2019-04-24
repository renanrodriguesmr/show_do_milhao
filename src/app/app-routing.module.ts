import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialViewComponent } from './initial-view/initial-view.component';
import { GameViewComponent } from './game-view/game-view.component';
import { RedirectToNewQuestionComponent } from './redirect-to-new-question/redirect-to-new-question.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: InitialViewComponent },
  { path: 'game/:round', component: GameViewComponent},
  { path: 'restart/:round', component: RedirectToNewQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
