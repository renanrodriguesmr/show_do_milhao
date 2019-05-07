import { Question } from './../question';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
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
  modalRef: BsModalRef;


  constructor(private router: Router,
              private modalService: BsModalService,
  ) { }

  ngOnInit() {
  }
  
  goToNext(): void {
    this.router.navigateByUrl('/restart/' + String(this.next_round.round_id));
  }

  endGame(): void {
    this.closeModal();
    Question.emptyQuestionList();
    this.router.navigateByUrl('/start');
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
  }
  closeModal(){
    this.modalRef.hide();
  }

}
