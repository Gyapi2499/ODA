import { Injectable } from '@angular/core';
import { AuthService, httpOptions } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private issueUrl: string = 'http://localhost:8080/users';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getTeachers(): Promise<User[]> {
    return this.http.get<User[]>(`${this.issueUrl}/teach`, httpOptions).toPromise();
  }
}
