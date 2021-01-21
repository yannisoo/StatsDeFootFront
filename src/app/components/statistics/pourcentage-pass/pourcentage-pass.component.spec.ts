import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourcentagePassComponent } from './pourcentage-pass.component';

describe('PourcentagePassComponent', () => {
  let component: PourcentagePassComponent;
  let fixture: ComponentFixture<PourcentagePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PourcentagePassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PourcentagePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
