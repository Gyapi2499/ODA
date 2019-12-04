import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonToggleModule, MatIconModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component'; 
import { RoutingModule } from './routing/routing.module';
import { CourseComponent } from './course/course.component';
import { NewCourseButtonComponent } from './new-course-button/new-course-button.component';
import { FilterComponent } from './filter/filter.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { ModifyButtonComponent } from './modify-button/modify-button.component';
import { ApplyButtonComponent } from './apply-button/apply-button.component';
import { TeacherToCourseComponent } from './teacher-to-course/teacher-to-course.component';
import { UserComponent } from './user/user.component';
import { ODAHeaderComponent } from './oda-header/oda-header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { PromoteToTeacherComponent } from './promote-to-teacher/promote-to-teacher.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModifyCourseComponent } from './modify-course/modify-course.component';


@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    IssueListComponent,
    IssueFormComponent,
    IssueDetailComponent,
    CourseComponent,
    NewCourseButtonComponent,
    FilterComponent,
    DeleteButtonComponent,
    ModifyButtonComponent,
    ApplyButtonComponent,
    TeacherToCourseComponent,
    UserComponent,
    ODAHeaderComponent,
    MainpageComponent,
    CourseCardComponent,
    UserListComponent,
    AddCourseComponent,
    UserListComponent,
    PromoteToTeacherComponent,
    LoginFormComponent,
    ModifyCourseComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    FlexLayoutModule,
    NgbModule,
    RoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
