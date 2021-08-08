import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab-js-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> {
  @Input() public tableHeader: string;
  @Input() public columnNames: (keyof T)[] = [];
  @Input() public tableData: T[] = [];
}
