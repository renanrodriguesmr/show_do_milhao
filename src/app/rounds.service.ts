import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RoundsService {

  constructor(private db: AngularFireDatabase) { }

  public getRoundInfoById(id: number): AngularFireObject<{}> {
    id = id -1;
    return this.db.object('rodadas/' + id);
  }
}
