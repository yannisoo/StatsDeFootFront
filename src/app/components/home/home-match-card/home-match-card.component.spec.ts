import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMatchCardComponent } from './home-match-card.component';

describe('HomeMatchCardComponent', () => {
  let component: HomeMatchCardComponent;
  let fixture: ComponentFixture<HomeMatchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMatchCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
