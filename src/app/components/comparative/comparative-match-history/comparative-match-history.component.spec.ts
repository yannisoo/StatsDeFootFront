import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHistoryComparativeComponent } from './match-history-comparative.component';

describe('MatchHistoryComparativeComponent', () => {
  let component: MatchHistoryComparativeComponent;
  let fixture: ComponentFixture<MatchHistoryComparativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchHistoryComparativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchHistoryComparativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
