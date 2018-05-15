import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientListingComponent } from './ingredient-listing.component';

describe('IngredientListingComponent', () => {
  let component: IngredientListingComponent;
  let fixture: ComponentFixture<IngredientListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
