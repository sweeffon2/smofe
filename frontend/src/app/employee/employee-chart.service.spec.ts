import { TestBed } from '@angular/core/testing';

import { EmployeeChartService } from './employee-chart.service';

describe('EmployeeChartService', () => {
  let service: EmployeeChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
