import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComparativeSearchComponent } from './comparative-search.component';

describe('ComparativeSearchComponent', () => {
  let component: ComparativeSearchComponent;
  let fixture: ComponentFixture<ComparativeSearchComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativeSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
