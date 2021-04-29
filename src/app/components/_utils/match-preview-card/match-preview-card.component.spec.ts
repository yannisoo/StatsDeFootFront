import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPreviewCardComponent } from './match-preview-card.component';

describe('MatchPreviewCardComponent', () => {
  let component: MatchPreviewCardComponent;
  let fixture: ComponentFixture<MatchPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchPreviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
