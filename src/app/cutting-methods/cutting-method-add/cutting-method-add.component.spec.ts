import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingMethodAddComponent } from './cutting-method-add.component';

describe('CuttingMethodAddComponent', () => {
  let component: CuttingMethodAddComponent;
  let fixture: ComponentFixture<CuttingMethodAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuttingMethodAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttingMethodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
