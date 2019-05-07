import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ModalModule, BsModalRef  } from 'ngx-bootstrap/modal';

import { InitialViewComponent } from './initial-view/initial-view.component';
import { GameViewComponent } from './game-view/game-view.component';
import { DecisionPointComponent } from './decision-point/decision-point.component';
import { RedirectToNewQuestionComponent } from './redirect-to-new-question/redirect-to-new-question.component';
import { AnswerResultPipe } from './answer-result.pipe';
import { FinalResultPipe } from './final-result.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InitialViewComponent,
    GameViewComponent,
    DecisionPointComponent,
    RedirectToNewQuestionComponent,
    AnswerResultPipe,
    FinalResultPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ModalModule.forRoot(),
  ],
  providers: [
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
