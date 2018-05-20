import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroOneItemComponent } from './micro-one-item.component';

describe('MicroOneItemComponent', () => {
  let component: MicroOneItemComponent;
  let fixture: ComponentFixture<MicroOneItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroOneItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroOneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
