import { Question } from './../question';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Round } from '../round';

@Component({
  selector: 'app-decision-point',
  templateUrl: './decision-point.component.html',
  styleUrls: ['./decision-point.component.sass']
})
export class DecisionPointComponent implements OnInit {
  @Input() round: Round;
  @Input() next_round: Round;
  @Input() success: Boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  goToNext(): void {
    this.router.navigateByUrl('/restart/' + String(this.next_round.round_id));
  }

  endGame(): void {
    Question.emptyQuestionList();
    this.router.navigateByUrl('/start');
  }

}
