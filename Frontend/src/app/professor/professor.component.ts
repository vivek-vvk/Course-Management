import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  btn1()
  {
    this.route.navigate(["/professor/addcourse"]);
  }

  btn2()
  {
     localStorage.clear()
     this.route.navigate(['/login/professorlogin'])
  }

  btn3(){
    this.route.navigate(["/professor/studentrequest"]);
  }

  btn4(){
    this.route.navigate(['/professor/professordasboard']);
  }

  btn5()
  {
    this.route.navigate(['/professor/approvedstudents']);
  }

  btn6()
  {
    this.route.navigate(['/professor/profile']);
  }
  btn7()
  {
    this.route.navigate(['/professor/alertstudent']);
  }
}
