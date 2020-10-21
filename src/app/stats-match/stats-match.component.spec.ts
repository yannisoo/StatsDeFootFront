import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsMatchComponent } from './stats-match.component';

describe('StatsMatchComponent', () => {
  let component: StatsMatchComponent;
  let fixture: ComponentFixture<StatsMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
