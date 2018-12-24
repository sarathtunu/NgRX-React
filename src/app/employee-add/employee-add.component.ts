import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators,FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Store, State, select } from "@ngrx/store";
import * as employeeActions from "../state/home.actions";
import * as fromEmployee from "../state/home.reducer";
import { Employee } from "../employee.model";


@Component({
  selector: "app-employee-add",
  templateUrl: "./employee-add.component.html",
  styleUrls: ["./employee-add.component.css"]
})
export class EmployeeAddComponent implements OnInit {
  employeeForm: FormGroup;
  formErrors = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'membership': '',
    'comments': ''
  };
  validationMessages = {
    'firstName': {
      'required': 'First Name is required.',
      'minlength': 'First Name must be greater than 2 characters.',
    },
    'lastName': {
      'required': 'Last Name is required.',
      'minlength': 'Last Name must be greater than 2 characters.',
    },
    'email': {
      'required': 'Email is required.'
    },
    'membership': {
      'required': 'Please select atleast one Activity.',
    },
    'comments': {
      'required': 'comments are required.',
      'minlength': 'Minimum 5 characters required.',
    }
  };
  constructor(
    private fb: FormBuilder,
    private store: Store<fromEmployee.AppState>,
    private router:Router
  ) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName:["", [Validators.required,Validators.minLength(2)]],
      email: ["", Validators.required],
      comments: ["", [Validators.required,Validators.minLength(5)]],
      membership: ["", [Validators.required]]
    });
    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.employeeForm);
    }); 
  
  }
  
  
  logValidationErrors(group: FormGroup = this.employeeForm): void {
    
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid &&
          (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          } 
        } 
      } 
    }); 
  }
  
  createEmployee() {
    const newEmployee: Employee = {
      firstName: this.employeeForm.get("firstName").value,
      lastName: this.employeeForm.get("lastName").value,
      email: this.employeeForm.get("email").value,
      comments: this.employeeForm.get("comments").value,
      membership: this.employeeForm.get("membership").value
    };
    
    this.store.dispatch(new employeeActions.CreateEmployee(newEmployee));
    //this.employeeForm.reset();
    localStorage.setItem("token", "Registered");
    this.router.navigate(["/employees"]);
  }
}
