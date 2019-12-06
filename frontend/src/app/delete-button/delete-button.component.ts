import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {

  @Input() id:number;
  constructor(private courseService:CourseService, private router:Router) { }

  ngOnInit() {
  }

  delete(){
    this.courseService.deleteCourse(this.id);
    this.router.navigate([''])
  }

}
