import { Component, OnInit, ElementRef } from '@angular/core';
import { Course } from '../Course/course.interface';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  public courses:Course[]
  public page:number;
  public status:String;
  constructor(private courseService:CourseService) { }

  async ngOnInit() {
    this.page=0;
    this.courses=await this.courseService.getMainPage("DATE",this.page);
  }
  async getNewOrder(status:string){
    this.page=0;
    this.courses=await this.courseService.getMainPage(status,this.page);
  }
  async nextPage(){
    this.page+=1;
    this.courses=await this.courseService.getMainPage("DATE",this.page);
  }
  async previousPage(){
    this.page-=1;
    this.courses=await this.courseService.getMainPage("DATE",this.page);
  }
  

}
