import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RechercheComparatifComponent } from './recherche-comparatif.component';
import { ComparativeCardComponent } from '../comparative-card/comparative-card.component';

describe('RechercheComparatifComponent', () => {
  let component: RechercheComparatifComponent;
  let fixture: ComponentFixture<RechercheComparatifComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheComparatifComponent, ComparativeCardComponent ]
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
