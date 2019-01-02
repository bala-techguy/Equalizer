import { TestBed } from '@angular/core/testing';

import { LoyaltyUserService } from './loyalty-user.service';

describe('LoyaltyUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoyaltyUserService = TestBed.get(LoyaltyUserService);
    expect(service).toBeTruthy();
  });
});
