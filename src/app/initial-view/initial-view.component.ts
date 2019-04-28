import { Component, OnInit } from '@angular/core';
import { TotalsService } from '../totals.service';

@Component({
  selector: 'app-initial-view',
  templateUrl: './initial-view.component.html',
  styleUrls: ['./initial-view.component.sass']
})
export class InitialViewComponent implements OnInit {

  constructor(private totalsService: TotalsService) {
  }

  ngOnInit() {
    this.totalsService.setTotais();
  }

}
