/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShopIngrediantComponent } from './shop-ingrediant.component';

describe('ShopIngrediantComponent', () => {
  let component: ShopIngrediantComponent;
  let fixture: ComponentFixture<ShopIngrediantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopIngrediantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopIngrediantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
