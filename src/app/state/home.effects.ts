import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { EmployeeService } from "../employee.service";
import * as employeeActions from "../state/home.actions";
import { Employee } from "../employee.model";

@Injectable()
export class EmployeeEffect {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}

  @Effect()
  loadEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.LoadEmployee>(
      employeeActions.EmployeeActionTypes.LOAD_EMPLOYEE
    ),
    mergeMap((action: employeeActions.LoadEmployee) =>
      this.employeeService.getEmployeeById(action.payload).pipe(
        map(
          (employee: Employee) =>
            new employeeActions.LoadEmployeeSuccess(employee)
        ),
        catchError(err => of(new employeeActions.LoadEmployeeFail(err)))
      )
    )
  );

  @Effect()
  createEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.CreateEmployee>(
      employeeActions.EmployeeActionTypes.CREATE_EMPLOYEE
    ),
    map((action: employeeActions.CreateEmployee) => action.payload),
    mergeMap((employee: Employee) =>
      this.employeeService.createEmployee(employee).pipe(
        map(
          (newEmployee: Employee) =>
            new employeeActions.CreateEmployeeSuccess(newEmployee)
        ),
        catchError(err => of(new employeeActions.CreateEmployeeFail(err)))
      )
    )
  );

  @Effect()
  updateEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.UpdateEmployee>(
      employeeActions.EmployeeActionTypes.UPDATE_EMPLOYEE
    ),
    map((action: employeeActions.UpdateEmployee) => action.payload),
    mergeMap((employee: Employee) =>
      this.employeeService.updateEmployee(employee).pipe(
        map(
          (updateEmployee: Employee) =>
            new employeeActions.UpdateEmployeeSuccess({
              id: updateEmployee.id,
              changes: updateEmployee
            })
        ),
        catchError(err => of(new employeeActions.UpdateEmployeeFail(err)))
      )
    )
  );

}
