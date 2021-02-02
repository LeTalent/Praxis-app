import { TestBed } from '@angular/core/testing';

import { PatientenService } from './patienten.service';

describe('PatientenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientenService = TestBed.get(PatientenService);
    expect(service).toBeTruthy();
  });
});
