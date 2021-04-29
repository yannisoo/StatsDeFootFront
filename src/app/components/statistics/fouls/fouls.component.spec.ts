import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoulsComponent } from './fouls.component';

describe('FautesComponent', () => {
  let component: FoulsComponent;
  let fixture: ComponentFixture<FoulsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoulsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
