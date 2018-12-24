import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { EmployeeAddComponent } from "./employee-add/employee-add.component";


const appRoutes: Routes = [
  { path: "register", component: EmployeeAddComponent},
  {
    path: "employees",
    loadChildren: "../app/employees/employees.module#EmployeesModule"
  }, 
  {path: "", redirectTo:"/register", pathMatch:'full'}
];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
