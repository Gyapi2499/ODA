import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../Course/course.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public courses:Course[]
  public page:number;
  constructor(private courseService:CourseService,private router: ActivatedRoute,
    private route: Router) {
      route.events.subscribe((val) => {
        this.onUrlChange();
      });
     }

  async ngOnInit() {
    this.courses=await this.courseService.searchCourse(this.router.snapshot.params['query']);
  }
  async onUrlChange(){
    this.courses= await this.courseService.searchCourse(this.router.snapshot.params['query']);
  }


}
