import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public title : string;
  public description: string;
  public id: number;
  public max: number;
  public actual: number;
  public date: string;
  public image: string;
  public teacher: string;
  public avatar: string;

  constructor() {
      this.title="course.title";
      this.description = "course.description";
      this.id=1;
      this.image="./DSC_0560.JPG";
      this.max=3;
      this.actual=1;
      this.avatar="./DSC_0560.JPG";
      this.date="course.date";
      this.teacher="course.teacher";
  }

  ngOnInit() {
  }

}
