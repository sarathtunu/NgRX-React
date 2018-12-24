import { AppState } from "./home.reducer";
import { EmployeeState } from "../employees/state/employee.reducer";

 
// Define the state tree with it's feature slices
export interface AppState {
   app: AppState,
  customers: EmployeeState
}
export interface AppState {}
