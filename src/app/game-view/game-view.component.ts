import { Question } from './../question';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireObject } from '@angular/fire/database';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {
  @Input() round_id: String;

  answered_question: Boolean;
  success: Boolean;
  questionsReference: AngularFireObject<{}>;
  question: Question;


  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService
  ) { }

  ngOnInit() {
    this.round_id = this.route.snapshot.paramMap.get('round');
    this.answered_question = false;
    this.getQuestionInfo();
    
  }

  getQuestionInfo(): void {
    this.questionsReference = this.questionsService.generateQuestion();
    this.questionsReference.snapshotChanges().subscribe(datainfo => {
      var data = datainfo.payload.val();
      this.question = new Question(data['enunciado'], data['resposta1']['certa'], data['resposta1']['texto'], data['resposta2']['certa'], data['resposta2']['texto'], data['resposta3']['certa'], data['resposta3']['texto'], data['resposta4']['certa'], data['resposta4']['texto'], data['resposta5']['certa'], data['resposta5']['texto'], Number(datainfo.key));
      console.log(this.question.rightAnswer());
      console.log(Question.questionslist);
    });
  }

  answer(i: number): void{
    this.success = (i == this.question.rightAnswer());
    this.answered_question = true;
  }

}
