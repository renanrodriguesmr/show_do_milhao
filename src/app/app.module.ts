import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { InitialViewComponent } from './initial-view/initial-view.component';
import { GameViewComponent } from './game-view/game-view.component';
import { DecisionPointComponent } from './decision-point/decision-point.component';
import { RedirectToNewQuestionComponent } from './redirect-to-new-question/redirect-to-new-question.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialViewComponent,
    GameViewComponent,
    DecisionPointComponent,
    RedirectToNewQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
