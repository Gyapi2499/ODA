import { Component, OnChanges, Input, Output, EventEmitter, OnInit  } from '@angular/core'; 
import { NgForm } from '@angular/forms';
import {Course} from '../Course/course.interface';
import { User } from '../user.class';
import {  ActivatedRoute } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-modify-course',
  templateUrl: './modify-course.component.html',
  styleUrls: ['./modify-course.component.css']
})
export class ModifyCourseComponent implements OnInit,OnChanges {

  dropdownSettings:IDropdownSettings;
  @Input() course: Course = null;
  public model: Course;
  @Output() onSubmit = new EventEmitter<Course>();
  public teachers:User[];

  constructor(private route: ActivatedRoute,private courseService: CourseService){
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
  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.course = await this.courseService.getCourse(id);
    console.log(this.course);
    this.model=this.course;
  }

}
