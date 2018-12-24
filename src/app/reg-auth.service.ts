import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RegAuthService {

  constructor(private router:Router) { }
  getToken(){
    return localStorage.getItem("token")
  }
  loggedIn(){
    return !!localStorage.getItem("token")
  }
  loggedOut(){
    localStorage.removeItem("token")
    this.router.navigate(['/register'])
  }
}
