import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() public title : string;
  @Input() public description: string;
  @Input() public id: number;
  @Input() public max: number;
  @Input() public actual: number;
  @Input() public date: string;
  @Input() public image: string;
  @Input() public teacher: string;
  @Input() public avatar: string;

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
