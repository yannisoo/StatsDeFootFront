import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoulsTeamComponent } from './fouls-team.component';

describe('FoulsTeamComponent', () => {
  let component: FoulsTeamComponent;
  let fixture: ComponentFixture<FoulsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoulsTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoulsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
