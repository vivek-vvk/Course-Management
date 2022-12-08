import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public route:Router,public auth:AuthService) { }
    id=localStorage.getItem('email');
 
    ngOnInit(): void {
      this.auth.verifieduser(this.id)
  }


  btnclk()
  {
    this.route.navigate(["/student"]);
  }

btnclk1()
{
this.route.navigate(["/student/studentenroll"])
}


  btnclk3(){
    this.route.navigate(["/student/studentprofile"]);
  }

  btnclk5(){
    localStorage.clear()
    sessionStorage.clear()
    this.route.navigate(["/login"])

  }

  btnclk2(){
    this.route.navigate(['/student/studentcourse'])
  }

  btnclk4(){
    this.route.navigate(['/student/message'])
  }

}
