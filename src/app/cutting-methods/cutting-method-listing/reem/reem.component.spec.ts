/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReemComponent } from './reem.component';

describe('ReemComponent', () => {
  let component: ReemComponent;
  let fixture: ComponentFixture<ReemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
