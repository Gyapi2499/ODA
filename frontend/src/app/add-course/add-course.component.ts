import { Component, OnChanges, Input, Output, EventEmitter  } from '@angular/core'; 
import { NgForm } from '@angular/forms';
import {Course} from '../Course/course.interface';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnChanges {

  @Input() course: Course
  public model: Course
  @Output() onSubmit = new EventEmitter<Course>();

  constructor() { }

  submit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }

  ngOnChanges(): void {
    this.model = Object.assign({}, this.course);
  }


}
