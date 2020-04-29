import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAnimationComponent } from './custom-animation.component';

describe('CustomAnimationComponent', () => {
  let component: CustomAnimationComponent;
  let fixture: ComponentFixture<CustomAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
