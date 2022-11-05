import { TestBed } from '@angular/core/testing';

import { FuelrecordService } from './fuelrecord.service';

describe('FuelrecordService', () => {
  let service: FuelrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuelrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
