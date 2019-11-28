import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';

@Component({
  selector: 'app-apply-button',
  templateUrl: './apply-button.component.html',
  styleUrls: ['./apply-button.component.css']
})
export class ApplyButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  apply(id:number,user:User):void{
    
  }

}
