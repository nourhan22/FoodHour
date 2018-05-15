import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroOrganismListingComponent } from './micro-organism-listing.component';

describe('MicroOrganismListingComponent', () => {
  let component: MicroOrganismListingComponent;
  let fixture: ComponentFixture<MicroOrganismListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroOrganismListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroOrganismListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
