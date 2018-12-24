import { Component, OnInit,Input } from '@angular/core';
import { Employee } from "../../employee.model";
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {
  @Input()
  EmployeeDetail:Employee[]=[]
  change:boolean = false;
  dataSource:MatTableDataSource<Employee>;
  constructor() {     }
  
  
  displayedColumns = ['firstName', 'lastName', 'email', 'membership', 'comments'];
  
  ngOnInit() {
  }
  
  applyFilter(filterValue: string) {
    this.change = true;
    this.dataSource = new MatTableDataSource(this.EmployeeDetail);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
