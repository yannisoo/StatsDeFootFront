import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossessionPassComponent } from './possession-pass.component';

describe('PossessionPassComponent', () => {
  let component: PossessionPassComponent;
  let fixture: ComponentFixture<PossessionPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossessionPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossessionPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
