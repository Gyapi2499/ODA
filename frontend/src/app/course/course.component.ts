import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public course:Course;

  constructor(private route: ActivatedRoute,private courseService: CourseService) {
      
  }

  async ngOnInit() {
    this.course = new Course();
    const id = +this.route.snapshot.paramMap.get('id');
    this.course = await this.courseService.getCourse(id);
  }

  

}
