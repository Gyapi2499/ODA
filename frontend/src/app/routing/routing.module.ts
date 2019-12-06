import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssueListComponent } from "../issue-list/issue-list.component";
import { IssueFormComponent } from '../issue-form/issue-form.component';
import { IssueDetailComponent } from '../issue-detail/issue-detail.component';
import { AddCourseComponent } from '../add-course/add-course.component';
import { CourseComponent } from '../course/course.component';
import { AuthGuard } from '../auth.guard';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ModifyCourseComponent } from '../modify-course/modify-course.component';
import { MainpageComponent } from '../mainpage/mainpage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    canActivate: [ AuthGuard ],
    component: MainpageComponent,
  },
  {
    path: 'modify/:id',
    component: ModifyCourseComponent,
    canActivate: [ AuthGuard ]
    
  },
  {
    path: 'add',
    component: AddCourseComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'course/:id',
    component: CourseComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'searchq/:query',
    component: MainpageComponent,
    canActivate: [ AuthGuard ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }