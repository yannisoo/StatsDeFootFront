import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHistoryComparativeMenuComponent } from './match-history-comparative-menu.component';

describe('MatchHistoryComparativeMenuComponent', () => {
  let component: MatchHistoryComparativeMenuComponent;
  let fixture: ComponentFixture<MatchHistoryComparativeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchHistoryComparativeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchHistoryComparativeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
