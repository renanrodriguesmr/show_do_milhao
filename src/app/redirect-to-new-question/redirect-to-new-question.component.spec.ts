import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectToNewQuestionComponent } from './redirect-to-new-question.component';

describe('RedirectToNewQuestionComponent', () => {
  let component: RedirectToNewQuestionComponent;
  let fixture: ComponentFixture<RedirectToNewQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectToNewQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectToNewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
