import { Component, OnChanges, Input, Output, EventEmitter  } from '@angular/core'; 
import { NgForm } from '@angular/forms';
import {Course} from '../Course/course.interface';
import { User } from '../user.class';
import {  ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CourseService } from '../course.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnChanges {

  dropdownSettings:IDropdownSettings;
  @Input() course: Course = null;
  public model: Course;
  public deadline:String;
  public teachers:User[];

  constructor(private router:Router,private route: ActivatedRoute,private courseService: CourseService,private userService:UserService){
      this.model=new Course();
      this.model.teachers=[];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'email',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
   }

  async submit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log(this.model)
    this.model.deadLine=new Date(this.deadline+'T23:59:48.000')
    this.model = await this.courseService.createCourse(this.model);
    this.router.navigate(['course/'+this.model.id])
  }
  onItemSelect(item:User){
      console.log(this.model.teachers);
  }

  ngOnChanges(): void {
    this.model = Object.assign({}, this.course);
  }

  async ngOnInit() {
    this.teachers = await this.userService.getTeachers();
  }

}
