import { TestBed } from '@angular/core/testing';

import { CognitoGuard } from './cognito.guard';

describe('CognitoGuard', () => {
  let guard: CognitoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CognitoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
