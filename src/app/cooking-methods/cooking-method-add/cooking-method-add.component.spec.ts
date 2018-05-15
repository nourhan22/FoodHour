import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingMethodAddComponent } from './cooking-method-add.component';

describe('CookingMethodAddComponent', () => {
  let component: CookingMethodAddComponent;
  let fixture: ComponentFixture<CookingMethodAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingMethodAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingMethodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
