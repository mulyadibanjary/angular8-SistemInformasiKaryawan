import { TestBed } from '@angular/core/testing';

import { EmpployeesService } from './empployees.service';

describe('EmpployeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpployeesService = TestBed.get(EmpployeesService);
    expect(service).toBeTruthy();
  });
});
