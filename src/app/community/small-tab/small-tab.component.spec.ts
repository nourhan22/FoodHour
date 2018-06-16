/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmallTabComponent } from './small-tab.component';

describe('SmallTabComponent', () => {
  let component: SmallTabComponent;
  let fixture: ComponentFixture<SmallTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
