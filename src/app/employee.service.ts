import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Employee } from "./employee.model";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private employeesUrl = "http://localhost:3000/employees";

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  getEmployeeById(payload: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.employeesUrl}/${payload}`);
  }

  getEmployeeByeMailId(payload: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.employeesUrl}/${payload}`);
  }
  createEmployee(payload: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, payload);
  } 

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.patch<Employee>(
      `${this.employeesUrl}/${employee.id}`,
      employee
    );
  }

  deleteEmployee(payload: number) {
    return this.http.delete(`${this.employeesUrl}/${payload}`);
  }
}
