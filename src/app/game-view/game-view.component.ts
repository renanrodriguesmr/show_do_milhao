import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.sass']
})
export class GameViewComponent implements OnInit {
  @Input() round_id: String;

  answered_question: Boolean;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.round_id = this.route.snapshot.paramMap.get('round');
    this.answered_question = false;
  }

  answer(){
    this.answered_question = true;
  }

}
