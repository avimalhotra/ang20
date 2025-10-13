import { TestBed } from '@angular/core/testing';

import { DevError } from './dev-error';

describe('DevError', () => {
  let service: DevError;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevError);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
