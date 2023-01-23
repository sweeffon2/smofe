import { TestBed } from '@angular/core/testing';

import { CheckinProviderService } from './checkin-provider.service';

describe('CheckinProviderService', () => {
  let service: CheckinProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckinProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
