/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MelhoresdomesService } from './melhoresdomes.service';

describe('Service: Melhoresdomes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MelhoresdomesService]
    });
  });

  it('should ...', inject([MelhoresdomesService], (service: MelhoresdomesService) => {
    expect(service).toBeTruthy();
  }));
});
