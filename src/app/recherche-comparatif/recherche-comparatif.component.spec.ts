import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheComparatifComponent } from './recherche-comparatif.component';

describe('RechercheComparatifComponent', () => {
  let component: RechercheComparatifComponent;
  let fixture: ComponentFixture<RechercheComparatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheComparatifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheComparatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
