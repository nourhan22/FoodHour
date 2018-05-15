import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingMethodItemComponent } from './cooking-method-item.component';

describe('CookingMethodItemComponent', () => {
  let component: CookingMethodItemComponent;
  let fixture: ComponentFixture<CookingMethodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingMethodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingMethodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
