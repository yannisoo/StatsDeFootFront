import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeMatchHistoryMenuComponent } from './comparative-match-history-menu.component';

describe('ComparativeMatchHistoryMenuComponent', () => {
  let component: ComparativeMatchHistoryMenuComponent;
  let fixture: ComponentFixture<ComparativeMatchHistoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativeMatchHistoryMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativeMatchHistoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
