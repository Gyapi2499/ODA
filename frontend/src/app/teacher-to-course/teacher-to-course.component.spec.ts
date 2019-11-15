import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherToCourseComponent } from './teacher-to-course.component';

describe('TeacherToCourseComponent', () => {
  let component: TeacherToCourseComponent;
  let fixture: ComponentFixture<TeacherToCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherToCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherToCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
