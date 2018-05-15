import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingMethodItemComponent } from './cutting-method-item.component';

describe('CuttingMethodItemComponent', () => {
  let component: CuttingMethodItemComponent;
  let fixture: ComponentFixture<CuttingMethodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuttingMethodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttingMethodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
