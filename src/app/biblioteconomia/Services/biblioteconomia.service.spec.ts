/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BiblioteconomiaService } from './biblioteconomia.service';

describe('Service: Biblioteconomia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BiblioteconomiaService]
    });
  });

  it('should ...', inject([BiblioteconomiaService], (service: BiblioteconomiaService) => {
    expect(service).toBeTruthy();
  }));
});
