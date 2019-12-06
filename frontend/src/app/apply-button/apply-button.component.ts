import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.class';
import { AuthService } from '../auth.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-apply-button',
  templateUrl: './apply-button.component.html',
  styleUrls: ['./apply-button.component.css']
})
export class ApplyButtonComponent implements OnInit {

  @Input() id:number;
  @Output() onChange = new EventEmitter<User>();
  nice:boolean

  constructor(private authService:AuthService,private courseService:CourseService) { }

  ngOnInit() {
  }

  async apply(){
    this.nice = await this.courseService.apply(this.id,this.authService.user);
    if(this.nice){
      this.onChange.emit(this.authService.user);
    }
  }

}
