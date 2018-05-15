import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingMethodListingComponent } from './cutting-method-listing.component';

describe('CuttingMethodListingComponent', () => {
  let component: CuttingMethodListingComponent;
  let fixture: ComponentFixture<CuttingMethodListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuttingMethodListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttingMethodListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
