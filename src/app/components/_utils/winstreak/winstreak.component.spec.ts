import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinstreakComponent } from './winstreak.component';

describe('WinstreakComponent', () => {
  let component: WinstreakComponent;
  let fixture: ComponentFixture<WinstreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinstreakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinstreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
