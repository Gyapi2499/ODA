import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modify-button',
  templateUrl: './modify-button.component.html',
  styleUrls: ['./modify-button.component.css']
})
export class ModifyButtonComponent implements OnInit {

  @Input() id:number;
  constructor() {}

  ngOnInit() {
  }

}
