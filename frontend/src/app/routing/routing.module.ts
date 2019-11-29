import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssueListComponent } from "../issue-list/issue-list.component";
import { IssueFormComponent } from '../issue-form/issue-form.component';
import { IssueDetailComponent } from '../issue-detail/issue-detail.component';
import { AddCourseComponent } from '../add-course/add-course.component';
import { CourseComponent } from '../course/course.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/issues',
    pathMatch: 'full'
  },
  {
    path: 'modify/:id',
    component: AddCourseComponent
  },
  {
    path: 'add',
    component: AddCourseComponent
  },
  {
    path: 'courses/:id',
    component: CourseComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }