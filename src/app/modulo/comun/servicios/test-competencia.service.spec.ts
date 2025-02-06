import { TestBed } from '@angular/core/testing';

import { TestCompetenciaService } from './test-competencia.service';

describe('TestCompetenciaService', () => {
  let service: TestCompetenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCompetenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
