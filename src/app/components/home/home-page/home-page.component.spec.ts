import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule}
       from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomePageComponent } from './home-page.component';
import { HttpInterceptorMockService } from 'src/app/services/mock/http-interceptor-mock.service';
import { RouterTestingModule } from '@angular/router/testing';
import { formatDate } from '@angular/common';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

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
          }
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
    console.log(component.matches)
    console.log(component.stagedMatches)
    expect(component.matches[0].fixture_id).toEqual(605388);
  })

});
