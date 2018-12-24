import { Component, OnInit } from "@angular/core";
import {MatTableDataSource} from '@angular/material';

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as employeeActions from "../state/employee.actions";
import * as fromEmployee from "../state/employee.reducer";
import { Employee } from "../../employee.model";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  error$: Observable<String>;
  headElements = ['First Name', 'Last Name', 'Email', 'Activities','Comments'];
  

  constructor(private store: Store<fromEmployee.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new employeeActions.LoadEmployees());
    this.employees$ = this.store.pipe(select(fromEmployee.getEmployees));
    this.error$ = this.store.pipe(select(fromEmployee.getError));
  }

  deleteEmployee(employee: Employee) {
    if (confirm("Are You Sure You want to Delete the User?")) {
      this.store.dispatch(new employeeActions.DeleteEmployee(employee.id));
    }
  }

  editEmployee(employee: Employee) {
    this.store.dispatch(new employeeActions.LoadEmployee(employee.id));
  }
}
