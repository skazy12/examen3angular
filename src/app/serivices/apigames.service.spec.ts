import { TestBed } from '@angular/core/testing';

import { ApigamesService } from './apigames.service';

describe('ApigamesService', () => {
  let service: ApigamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApigamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
