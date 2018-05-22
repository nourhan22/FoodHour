/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CookingMethodService } from './cookingMethod.service';

describe('Service: CookingMethod', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookingMethodService]
    });
  });

  it('should ...', inject([CookingMethodService], (service: CookingMethodService) => {
    expect(service).toBeTruthy();
  }));
});
