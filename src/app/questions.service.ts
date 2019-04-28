import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Question, Totais } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  question: Question;
  questions_total: number;
  totais: Totais;

  constructor(private db: AngularFireDatabase) { }

  private generateQuestionObjectById(id: number): AngularFireObject<{}> {
    return this.db.object('perguntas/' + id);
  }
  private getRandomInt(min: number, max: number): number {
    return Math.floor( Math.random()*(max-min+1)) + min;
  }
  private getRandomIndexQuestion(total: number): number {
    var index = this.getRandomInt(0, total);
    if (Question.questionslist.indexOf(index) == -1){
      return index;
    } else {
      return this.getRandomIndexQuestion(total);
    }
  }

  private instanceTotais(questions: number, rounds: number): void {
    this.totais = new Totais(questions, rounds);
  }
  public setTotais(): void {
    var ref = this.db.object('totais').valueChanges();
    ref.subscribe(data => {
      this.instanceTotais(data['perguntas'], data['rodadas']);
    });
  }
  public generateQuestion(): AngularFireObject<{}> {
    var index = this.getRandomIndexQuestion(this.totais.questions);
    return this.generateQuestionObjectById(index);
  }

}
