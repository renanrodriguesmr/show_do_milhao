import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Question, Totais } from './question';
import { TotalsService } from './totals.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  question: Question;

  constructor(private db: AngularFireDatabase, private totalsService: TotalsService) { }

  private generateQuestionObjectById(id: number): AngularFireObject<{}> {
    return this.db.object('perguntas/' + id);
  }
  private getRandomInt(min: number, max: number): number {
    return Math.floor( Math.random()*(max-min+1)) + min;
  }
  private getRandomIndexQuestion(total: number): number {
    var index = this.getRandomInt(0, total-1);
    if (Question.questionslist.indexOf(index) == -1){
      return index;
    } else {
      return this.getRandomIndexQuestion(total);
    }
  }

  public generateQuestion(): AngularFireObject<{}> {
    var totais = this.totalsService.getTotais();
    var index = this.getRandomIndexQuestion(totais.questions);
    return this.generateQuestionObjectById(index);
  }

}
