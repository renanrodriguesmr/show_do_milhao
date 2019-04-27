import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decision-point',
  templateUrl: './decision-point.component.html',
  styleUrls: ['./decision-point.component.sass']
})
export class DecisionPointComponent implements OnInit {
  @Input() round_id: String;
  @Input() success: Boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.success);
  }
  
  goToNext() {
    this.round_id =String(Number(this.round_id) + 1);
    this.router.navigateByUrl('/restart/' + this.round_id);
  }

}
