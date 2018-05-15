import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroOrganismAddComponent } from './micro-organism-add.component';

describe('MicroOrganismAddComponent', () => {
  let component: MicroOrganismAddComponent;
  let fixture: ComponentFixture<MicroOrganismAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroOrganismAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroOrganismAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
