/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MiniIngrediantComponent } from './miniIngrediant.component';

describe('MiniIngrediantComponent', () => {
  let component: MiniIngrediantComponent;
  let fixture: ComponentFixture<MiniIngrediantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniIngrediantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniIngrediantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
