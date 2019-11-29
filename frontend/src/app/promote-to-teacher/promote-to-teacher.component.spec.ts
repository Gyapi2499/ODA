import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteToTeacherComponent } from './promote-to-teacher.component';

describe('PromoteToTeacherComponent', () => {
  let component: PromoteToTeacherComponent;
  let fixture: ComponentFixture<PromoteToTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoteToTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteToTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
