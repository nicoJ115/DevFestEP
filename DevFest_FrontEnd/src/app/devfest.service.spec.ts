import { TestBed } from '@angular/core/testing';

import { DevfestService } from './devfest.service';

describe('DevfestService', () => {
  let service: DevfestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevfestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
