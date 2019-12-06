import { Component, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  @Input() public model:String;
  @Input() public focus:boolean;
  title = 'issue-tracker-client';
  constructor(public router: Router){
  }
  search(){
    this.router.navigate(["searchq/"+this.model]);
    this.model="";
  }
  
}
