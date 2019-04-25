import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ActionSequence } from 'protractor';

@Component({
  selector: 'app-initial-view',
  templateUrl: './initial-view.component.html',
  styleUrls: ['./initial-view.component.sass']
})
export class InitialViewComponent implements OnInit {
  itemsRef: AngularFireList<{}>;
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('perguntas');
    this.itemsRef.valueChanges().subscribe(questions => {
      questions.forEach(question => {
        console.log(question);
      });
    });

  }

  ngOnInit() {
    console.log(this.items);
  }

}
