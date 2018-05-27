/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CuttingService } from './Cutting.service';

describe('Service: CuttingServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuttingService]
    });
  });

  it('should ...', inject([CuttingService], (service: CuttingService) => {
    expect(service).toBeTruthy();
  }));
});
