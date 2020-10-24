import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotsTeamComponent } from './shots-team.component';

describe('ShotsTeamComponent', () => {
  let component: ShotsTeamComponent;
  let fixture: ComponentFixture<ShotsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShotsTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
