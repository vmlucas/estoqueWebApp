import { TestBed } from '@angular/core/testing';

import { EstoqueEngineService } from './estoque-engine.service';

describe('EstoqueEngineService', () => {
  let service: EstoqueEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstoqueEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
