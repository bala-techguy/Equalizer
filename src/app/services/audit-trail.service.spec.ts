import { TestBed } from '@angular/core/testing';

import { AuditTrailService } from './audit-trail.service';

describe('AuditTrailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditTrailService = TestBed.get(AuditTrailService);
    expect(service).toBeTruthy();
  });
});
