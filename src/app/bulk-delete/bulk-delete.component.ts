import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  isDelete: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', isDelete: false},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',isDelete: false},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',isDelete: false},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',isDelete: false},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',isDelete: false},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',isDelete: false},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', isDelete: false},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', isDelete: false},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', isDelete: false},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', isDelete: false}
];

@Component({
  selector: 'app-bulk-delete',
  templateUrl: './bulk-delete.component.html',
  styleUrls: ['./bulk-delete.component.scss']
})
export class BulkDeleteComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','delete'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

  bulkdelete() {
    var selectedData = this.dataSource.filter(source => source.isDelete === false);
    this.dataSource = selectedData;
  }

}
