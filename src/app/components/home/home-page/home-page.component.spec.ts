import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomePageComponent } from './home-page.component';
import { HttpInterceptorMockService } from 'src/app/services/mock/http-interceptor-mock.service';
import { RouterTestingModule } from '@angular/router/testing';
import { formatDate } from '@angular/common';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [HomePageComponent],
        imports: [
          HttpClientTestingModule,
          RouterTestingModule
        ],
        providers: [
          {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorMockService,
            multi: true
          },
          { provide: Router, useValue: router }
        ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should filterOn true to be true', () => {
    component.filterOn = true;
    component.activateFilter(2833);
    expect(component.filterOn).toBeTruthy();
  })

  it('should filterOn false to be true', () => {
    component.filterOn = false;
    component.activateFilter(2833);
    expect(component.filterOn).toBeTruthy();
  })

  it('should fixture_id to be 605388', () => {
    component.activateFilter(2833);
    component.chooseDay(formatDate(new Date(), 'yyyy-MM-dd', 'en'))
    expect(component.matches[0].fixture_id).toEqual(605388);
  })

  it('findMatch function should return an expected route', () => {
    let home = 1;
    let away = 2;
    component.findMatch(home, away);
    expect(router.navigate).toHaveBeenCalledWith(['/compare/1/2']);
  })

});
