/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CutToolComponent } from './cutTool.component';

describe('CutToolComponent', () => {
  let component: CutToolComponent;
  let fixture: ComponentFixture<CutToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
