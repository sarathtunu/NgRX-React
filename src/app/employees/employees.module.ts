import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { employeeReducer } from "./state/employee.reducer";
import { EmployeeEffect } from "./state/employee.effects";

import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeEditComponent } from "./employee-edit/employee-edit.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import {RegGuardGuard} from './reg-guard.guard';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material';

const employeeRoutes: Routes = [{ path: "", component: EmployeeComponent
 ,canActivate:[RegGuardGuard] }];

@NgModule({
  imports: [
    DemoMaterialModule, 
    /* BrowserAnimationsModule, */
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(employeeRoutes),
    StoreModule.forFeature("employees", employeeReducer),
    EffectsModule.forFeature([EmployeeEffect])
  ],
  declarations: [
    EmployeeComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  providers:[RegGuardGuard]
})
export class EmployeesModule {}
