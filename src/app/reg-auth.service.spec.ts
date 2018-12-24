import { TestBed, inject } from '@angular/core/testing';

import { RegAuthService } from './reg-auth.service';

describe('RegAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegAuthService]
    });
  });

  it('should be created', inject([RegAuthService], (service: RegAuthService) => {
    expect(service).toBeTruthy();
  }));
});
