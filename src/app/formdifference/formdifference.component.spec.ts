import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdifferenceComponent } from './formdifference.component';

describe('FormdifferenceComponent', () => {
  let component: FormdifferenceComponent;
  let fixture: ComponentFixture<FormdifferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormdifferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
