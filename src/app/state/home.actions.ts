import { Action } from "@ngrx/store";

import { Update } from "@ngrx/entity";

import { Employee } from "../employee.model";

export enum EmployeeActionTypes {
  LOAD_EMPLOYEE = "[Employee] Load Employee",
  LOAD_EMPLOYEE_SUCCESS = "[Employee] Load Employee Success",
  LOAD_EMPLOYEE_FAIL = "[Employee] Load Employee Fail",
  CREATE_EMPLOYEE = "[Employee] Create Employee",
  CREATE_EMPLOYEE_SUCCESS = "[Employee] Create Employee Success",
  CREATE_EMPLOYEE_FAIL = "[Employee] Create Employee Fail",
  UPDATE_EMPLOYEE = "[Employee] Update Employee",
  UPDATE_EMPLOYEE_SUCCESS = "[Employee] Update Employee Success",
  UPDATE_EMPLOYEE_FAIL = "[Employee] Update Employee Fail"
}


export class LoadEmployee implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEE;

  constructor(public payload: number) {}
}

export class LoadEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEE_SUCCESS;

  constructor(public payload: Employee) {}
}

export class LoadEmployeeFail implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEE_FAIL;

  constructor(public payload: string) {}
}

export class CreateEmployee implements Action {
  readonly type = EmployeeActionTypes.CREATE_EMPLOYEE;

  constructor(public payload: Employee) {}
}

export class CreateEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS;

  constructor(public payload: Employee) {}
}

export class CreateEmployeeFail implements Action {
  readonly type = EmployeeActionTypes.CREATE_EMPLOYEE_FAIL;

  constructor(public payload: string) {}
}

export class UpdateEmployee implements Action {
  readonly type = EmployeeActionTypes.UPDATE_EMPLOYEE;

  constructor(public payload: Employee) {}
}

export class UpdateEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.UPDATE_EMPLOYEE_SUCCESS;

  constructor(public payload: Update<Employee>) {}
}

export class UpdateEmployeeFail implements Action {
  readonly type = EmployeeActionTypes.UPDATE_EMPLOYEE_FAIL;

  constructor(public payload: string) {}
}

export type Action =
  | LoadEmployee
  | LoadEmployeeSuccess
  | LoadEmployeeFail
  | CreateEmployee
  | CreateEmployeeSuccess
  | CreateEmployeeFail
  | UpdateEmployee
  | UpdateEmployeeSuccess
  | UpdateEmployeeFail