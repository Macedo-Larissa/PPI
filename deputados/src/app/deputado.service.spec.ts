import { TestBed } from '@angular/core/testing';

import { DeputadoService } from './model/deputado.service';

describe('DeputadoService', () => {
  let service: DeputadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeputadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
