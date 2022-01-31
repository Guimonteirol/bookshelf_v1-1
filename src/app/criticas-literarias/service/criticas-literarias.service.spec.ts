import { TestBed } from '@angular/core/testing';

import { CriticasLiterariasService } from './criticas-literarias.service';

describe('CriticasLiterariasService', () => {
  let service: CriticasLiterariasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriticasLiterariasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
