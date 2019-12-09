import { Injectable } from '@angular/core';
import { AuthService, httpOptions } from './auth.service';
import { Course } from './Course/course.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private issueUrl: string = 'http://localhost:8080/course';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getMainPage(order:String,page:number): Promise<Course[]> {
    return this.http.get<Course[]>(`${this.issueUrl}/mainpage/${order}/${page}`, httpOptions).toPromise();
  }

  getCourse(id: number): Promise<Course> {
    return this.http.get<Course>(`${this.issueUrl}/get/${id}`, httpOptions).toPromise();
  }

  searchCourse(query: String): Promise<Course[]> {
    return this.http.get<Course[]>(`${this.issueUrl}/search/${query}`, httpOptions).toPromise();
  }

  createCourse(issue: Course): Promise<Course> {
    return this.http.post<Course>(`${this.issueUrl}/add`, issue, httpOptions).toPromise();
  }

  updateCourse(issue: Course): Promise<Course> {
    return this.http.put<Course>(`${this.issueUrl}/modify/${issue.id}`, issue, httpOptions).toPromise();
  }

  deleteCourse(id:number): Promise<Course> {
    return this.http.delete<Course>(`${this.issueUrl}/delete/${id}`, httpOptions).toPromise();
  }

  apply(id:number,user:User):Promise<boolean>{
    return this.http.put<boolean>(`${this.issueUrl}/apply/${id}`,user, httpOptions).toPromise();
  }
}
