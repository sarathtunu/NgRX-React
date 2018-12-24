import { Component, OnInit, OnDestroy } from '@angular/core';
import {RegAuthService} from '../../reg-auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  constructor(private service:RegAuthService) { }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.service.loggedOut();
  }

}
