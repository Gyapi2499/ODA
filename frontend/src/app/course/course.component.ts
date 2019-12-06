import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course.interface';
import { User } from '../user.class';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public course:Course;
  user:User
  constructor(private route: ActivatedRoute,private courseService: CourseService,private authService:AuthService) {
  }

  async ngOnInit() {
    this.course = new Course();
    const id = +this.route.snapshot.paramMap.get('id');
    this.course = await this.courseService.getCourse(id);
    this.user=this.authService.user;
  }
  apply(user:User){
    this.course.applicants.push(user);
    console.log("asd");
  }

  

}
