import { QuestionsService } from './../questions.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { ActionSequence } from 'protractor';
import { Question } from '../question';
import { TotalsService } from '../totals.service';

@Component({
  selector: 'app-initial-view',
  templateUrl: './initial-view.component.html',
  styleUrls: ['./initial-view.component.sass']
})
export class InitialViewComponent implements OnInit {

  constructor(private totalsService: TotalsService ) {
  }

  ngOnInit() {
    this.totalsService.setTotais();
  }

}
