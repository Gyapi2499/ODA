import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseButtonComponent } from './new-course-button.component';

describe('NewCourseButtonComponent', () => {
  let component: NewCourseButtonComponent;
  let fixture: ComponentFixture<NewCourseButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
