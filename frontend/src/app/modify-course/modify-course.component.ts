import { Component, OnChanges, Input, Output, EventEmitter, OnInit  } from '@angular/core'; 
import { NgForm } from '@angular/forms';
import {Course} from '../Course/course.interface';
import { User } from '../user.class';
import {  ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CourseService } from '../course.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-modify-course',
  templateUrl: './modify-course.component.html',
  styleUrls: ['./modify-course.component.css']
})
export class ModifyCourseComponent implements OnInit,OnChanges {

  dropdownSettings:IDropdownSettings;
  @Input() course: Course = null;
  public model: Course;
  public deadline:String;
  @Output() onSubmit = new EventEmitter<Course>();
  public teachers:User[];

  constructor(private route: ActivatedRoute,private courseService: CourseService,private router:Router,private authService:AuthService){
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'email',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
   }

  async submit(form: NgForm){
    if (!form.valid) {
      return;
    }
    this.model.deadLine=new Date(this.deadline+'T23:59:48.000')
    this.model = await this.courseService.updateCourse(this.model);
    this.router.navigate(['course/'+this.model.id])
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
    this.deadline=this.course.deadLine.toString().substr(0,10);
    if(!(this.course.createUser && this.course.createUser.email == this.authService.user.email) && this.authService.user.role !="ROLE_ADMIN"){
      this.router.navigate(['course/'+this.model.id]);
    }
  }
}
