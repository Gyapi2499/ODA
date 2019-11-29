import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() isFullList:boolean;
  users:User[]=[
    {
      id:"asd",
      name:"Kovács Elemérné",
      avatar:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
      role:"TEACHER",
    },
    {
      id:"asd",
      name:"Nagy Béla",
      avatar:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
      role:"TEACHER",
    }
  ];
  constructor() {
   }

  ngOnInit() {
  }

}
