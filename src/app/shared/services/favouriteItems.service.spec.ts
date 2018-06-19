/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FavouriteItemsService } from './favouriteItems.service';

describe('Service: FavouriteItems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavouriteItemsService]
    });
  });

  it('should ...', inject([FavouriteItemsService], (service: FavouriteItemsService) => {
    expect(service).toBeTruthy();
  }));
});
