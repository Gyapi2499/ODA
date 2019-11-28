import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.class';

@Component({
  selector: 'app-teacher-to-course',
  templateUrl: './teacher-to-course.component.html',
  styleUrls: ['./teacher-to-course.component.css']
})
export class TeacherToCourseComponent implements OnInit {

  @Input() user:User; 

  constructor() {
  }

  ngOnInit() {
  }

}
