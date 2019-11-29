import { Component, OnChanges, Input, Output, EventEmitter  } from '@angular/core'; 
import { NgForm } from '@angular/forms';
import {Course} from '../Course/course.interface';
import { User } from '../user.class';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnChanges {

  @Input() course: Course
  public model: Course;
  @Output() onSubmit = new EventEmitter<Course>();
  public teachers:User[]=[
    {
      id:"asd",
      name:"Kovács Elemérné",
      avatar:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
      role:"TEACHER",
    },
    {
      id:"asd",
      name:"Nagy Béla",
      avatar:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
      role:"TEACHER",
    }
  ];

  constructor() {
    this.model= {
      title:"asd",
      description:"asd",
      date:"asd",
      id: 1,
      max:1,
      actual:1,
      location:"",
      image:"",
      teacher:[],
      deadLine:"2019.11.11"
    }
   }

  submit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }
  onItemSelect(item:User){
      this.model.teacher.push(item);
  }

  ngOnChanges(): void {
    this.model = Object.assign({}, this.course);
  }


}
