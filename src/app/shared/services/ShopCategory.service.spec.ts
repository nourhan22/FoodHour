/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShopCategoryService } from './ShopCategory.service';

describe('Service: ShopCategory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopCategoryService]
    });
  });

  it('should ...', inject([ShopCategoryService], (service: ShopCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
