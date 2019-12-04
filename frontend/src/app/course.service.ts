import { Injectable } from '@angular/core';
import { AuthService, httpOptions } from './auth.service';
import { Course } from './Course/course.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private issueUrl: string = 'http://localhost:8080/course';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getIssues(): Promise<Course[]> {
    return this.http.get<Course[]>(`${this.issueUrl}`, httpOptions).toPromise();
  }

  getCourse(id: number): Promise<Course> {
    return this.http.get<Course>(`${this.issueUrl}/get/${id}`, httpOptions).toPromise();
  }

  createIssue(issue: Course): Promise<Course> {
    return this.http.post<Course>(`${this.issueUrl}`, issue, httpOptions).toPromise();
  }

  updateIssue(issue: Course): Promise<Course> {
    return this.http.put<Course>(`${this.issueUrl}/${issue.id}`, issue, httpOptions).toPromise();
  }

  deleteIssue(id): Promise<Course> {
    return this.http.delete<Course>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }
}
