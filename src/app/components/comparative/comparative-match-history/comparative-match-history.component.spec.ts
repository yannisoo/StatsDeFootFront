import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComparativeMatchHistoryComponent } from './comparative-match-history.component';


describe('MatchHistoryComparativeComponent', () => {
  let component: ComparativeMatchHistoryComponent;
  let fixture: ComponentFixture<ComparativeMatchHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativeMatchHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativeMatchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
