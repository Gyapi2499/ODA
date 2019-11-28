import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input('status') selectedStatus: string = '';
  public statuses: string[] = [ 'NAME', 'NOT FULL'];
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  onFilterChange(status: string): void {
    this.selectedStatus = status;
    this.onChange.emit(status);
  }
}
