import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import * as employeeActions from "../state/employee.actions";
import * as fromEmployee from "../state/employee.reducer";
import { Employee } from "../../employee.model";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromEmployee.AppState>
  ) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      comments: ["", Validators.required],
      membership: ["", Validators.required],
      id: null
    })

    const employee$: Observable<Employee> = this.store.select(
      fromEmployee.getCurrentEmployee
    )

    employee$.subscribe(currentEmployee => {
      if (currentEmployee) {
        this.employeeForm.patchValue({
          firstName: currentEmployee.firstName,
          lastName: currentEmployee.lastName,
          email: currentEmployee.email,
          comments: currentEmployee.comments,
          membership: currentEmployee.membership,
          id: currentEmployee.id
        });
      }
    })
  }

  updateEmployee() {
    const updatedEmployee: Employee = {
      firstName: this.employeeForm.get("firstName").value,
      lastName: this.employeeForm.get("lastName").value,
      email: this.employeeForm.get("email").value,
      comments: this.employeeForm.get("comments").value,
      membership: this.employeeForm.get("membership").value,
      id: this.employeeForm.get("id").value
    };

    this.store.dispatch(new employeeActions.UpdateEmployee(updatedEmployee))
  }

}
