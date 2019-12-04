import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() isFullList:boolean;
  @Input() public users:User[];
  constructor() {
   }
  ngOnInit() {
  }

}
