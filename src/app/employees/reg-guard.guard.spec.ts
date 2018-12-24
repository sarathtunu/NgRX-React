import { TestBed, async, inject } from '@angular/core/testing';

import { RegGuardGuard } from './reg-guard.guard';

describe('RegGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegGuardGuard]
    });
  });

  it('should ...', inject([RegGuardGuard], (guard: RegGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
