import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroOrganismItemComponent } from './micro-organism-item.component';

describe('MicroOrganismItemComponent', () => {
  let component: MicroOrganismItemComponent;
  let fixture: ComponentFixture<MicroOrganismItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroOrganismItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroOrganismItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
