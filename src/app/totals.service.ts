import { Injectable } from '@angular/core';
import { Totais } from './question';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TotalsService {
  private totais: Totais;

  constructor(private db: AngularFireDatabase) { }

  private instanceTotais(questions: number, rounds: number): void {
    this.totais = new Totais(questions, rounds);
  }
  public setTotais(): void {
    var ref = this.db.object('totais').valueChanges();
    ref.subscribe(data => {
      this.instanceTotais(data['perguntas'], data['rodadas']);
    });
  }
  public getTotais(): Totais {
    return this.totais;
  }
}
