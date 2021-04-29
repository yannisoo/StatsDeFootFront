import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComparativeSearchItemComponent } from './comparative-search-item.component';

describe('ComparativeSearchItemComponent', () => {
  let component: ComparativeSearchItemComponent;
  let fixture: ComponentFixture<ComparativeSearchItemComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  }));
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativeSearchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativeSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
