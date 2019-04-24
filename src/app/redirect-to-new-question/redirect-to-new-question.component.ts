import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect-to-new-question',
  templateUrl: './redirect-to-new-question.component.html',
  styleUrls: ['./redirect-to-new-question.component.sass']
})
export class RedirectToNewQuestionComponent implements OnInit {
  @Input() round_id: String;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.round_id = this.route.snapshot.paramMap.get('round');
    this.router.navigateByUrl('/game/' + this.round_id);
  }

}
