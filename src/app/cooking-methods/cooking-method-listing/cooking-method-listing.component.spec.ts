import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingMethodListingComponent } from './cooking-method-listing.component';

describe('CookingMethodListingComponent', () => {
  let component: CookingMethodListingComponent;
  let fixture: ComponentFixture<CookingMethodListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingMethodListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingMethodListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
