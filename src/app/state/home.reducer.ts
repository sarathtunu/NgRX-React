import * as employeeActions from "./home.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { Employee } from "../employee.model";
import * as fromRoot from "../state/app-state";

export interface EmployeeState extends EntityState<Employee> {
  selectedEmployeeId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  employees: EmployeeState;
}

export const employeeAdapter: EntityAdapter<Employee> = createEntityAdapter<
Employee>();

export const defaultEmployee: EmployeeState = {
  ids: [],
  entities: {},
  selectedEmployeeId: null,
  loading: false,
  loaded: false,
  error: ""
};

export const initialState = employeeAdapter.getInitialState(defaultEmployee);

export function employeeReducer(
  state = initialState,
  action: employeeActions.Action
): EmployeeState {
  switch (action.type) {
    case employeeActions.EmployeeActionTypes.LOAD_EMPLOYEE_SUCCESS: {
      return employeeAdapter.addOne(action.payload, {
        ...state,
        selectedEmployeeId: action.payload.id
      });
    }
    case employeeActions.EmployeeActionTypes.LOAD_EMPLOYEE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case employeeActions.EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS: {
      return employeeAdapter.addOne(action.payload, state);
    }
    case employeeActions.EmployeeActionTypes.CREATE_EMPLOYEE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case employeeActions.EmployeeActionTypes.UPDATE_EMPLOYEE_SUCCESS: {
      return employeeAdapter.updateOne(action.payload, state);
    }
    case employeeActions.EmployeeActionTypes.UPDATE_EMPLOYEE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

const getEmployeeFeatureState = createFeatureSelector<EmployeeState>(
  "employees"
);

export const getEmployees = createSelector(
  getEmployeeFeatureState,
  employeeAdapter.getSelectors().selectAll
);

export const getEmployeesLoading = createSelector(
  getEmployeeFeatureState,
  (state: EmployeeState) => state.loading
);

export const getEmployeesLoaded = createSelector(
  getEmployeeFeatureState,
  (state: EmployeeState) => state.loaded
);

export const getError = createSelector(
  getEmployeeFeatureState,
  (state: EmployeeState) => state.error
);

export const getCurrentEmployeeId = createSelector(
  getEmployeeFeatureState,
  (state: EmployeeState) => state.selectedEmployeeId
);
export const getCurrentEmployee = createSelector(
  getEmployeeFeatureState,
  getCurrentEmployeeId,
  state => state.entities[state.selectedEmployeeId]
);
