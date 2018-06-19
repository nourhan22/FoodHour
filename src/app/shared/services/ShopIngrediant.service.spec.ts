/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShopIngrediantService } from './ShopIngrediant.service';

describe('Service: ShopIngrediant', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopIngrediantService]
    });
  });

  it('should ...', inject([ShopIngrediantService], (service: ShopIngrediantService) => {
    expect(service).toBeTruthy();
  }));
});
