import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesAverageComponent } from './matches-average.component';

describe('MatchesAverageComponent', () => {
  let component: MatchesAverageComponent;
  let fixture: ComponentFixture<MatchesAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesAverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
