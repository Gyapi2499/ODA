import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input('status') selectedStatus: string = 'DATE';
  public statuses: string[] = ['DATE', 'NAME', 'NOT_FULL'];
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  onFilterChange(status: string): void {
    this.selectedStatus = status;
    this.onChange.emit(status);
    
  }
}
