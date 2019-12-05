import { Component, OnChanges, Input, Output, EventEmitter  } from '@angular/core'; 
import { NgForm } from '@angular/forms';
import {Course} from '../Course/course.interface';
import { User } from '../user.class';
import {  ActivatedRoute } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnChanges {

  dropdownSettings:IDropdownSettings;
  @Input() course: Course = null;
  public model: Course;
  @Output() onSubmit = new EventEmitter<Course>();
  public teachers:User[];

  constructor(private route: ActivatedRoute,private courseService: CourseService){
      this.model=new Course();
      this.model.teachers=[];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
   }

  submit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }
  onItemSelect(item:User){
      this.model.teachers.push(item);
  }

  ngOnChanges(): void {
    this.model = Object.assign({}, this.course);
  }

}
