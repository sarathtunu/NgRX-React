import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { RegAuthService } from '../reg-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegGuardGuard implements CanActivate {
  constructor(private service: RegAuthService, private router:Router){}
  canActivate(){
    if(this.service.loggedIn()){
      return true
    }
    else{
      this.router.navigate(['/register'])
      return false;
    }
  }
}
