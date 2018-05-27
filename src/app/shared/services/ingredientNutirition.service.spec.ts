/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IngrediientNutirionsService } from './ingredientNutirition.service';

describe('Service: IngrediientNutirions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngrediientNutirionsService]
    });
  });

  it('should ...', inject([IngrediientNutirionsService], (service: IngrediientNutirionsService) => {
    expect(service).toBeTruthy();
  }));
});
