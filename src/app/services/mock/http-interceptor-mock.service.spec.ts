import { TestBed } from '@angular/core/testing';

import { HttpInterceptorMockService } from './http-interceptor-mock.service';

describe('HttpInterceptorMockService', () => {
  let service: HttpInterceptorMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
