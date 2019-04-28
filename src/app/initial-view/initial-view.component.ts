import { QuestionsService } from './../questions.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { ActionSequence } from 'protractor';
import { Question } from '../question';

@Component({
  selector: 'app-initial-view',
  templateUrl: './initial-view.component.html',
  styleUrls: ['./initial-view.component.sass']
})
export class InitialViewComponent implements OnInit {

  constructor(private questionsService: QuestionsService ) {
  }

  ngOnInit() {
    this.questionsService.setTotais();
  }

}
