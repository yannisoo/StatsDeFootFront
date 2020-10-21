import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FautesComponent } from './fautes.component';

describe('FautesComponent', () => {
  let component: FautesComponent;
  let fixture: ComponentFixture<FautesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FautesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FautesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
