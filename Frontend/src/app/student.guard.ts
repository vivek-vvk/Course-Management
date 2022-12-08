import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}


  canActivate():boolean{

    if (this.auth.studentloggedIn()){
      
      return true
    }
    
    else{
      alert("You Need to Login to Access")
      this.router.navigate(['/login'])
      return false;
    }

  }
  
}
