import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  question: Question;

  constructor(private db: AngularFireDatabase) { }

  public generateQuestionObjectById(id: number): AngularFireObject<{}> {
    return this.db.object('perguntas/1');
  }
}
