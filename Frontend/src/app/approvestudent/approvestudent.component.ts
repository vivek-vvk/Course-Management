import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approvestudent',
  templateUrl: './approvestudent.component.html',
  styleUrls: ['./approvestudent.component.css']
})
export class ApprovestudentComponent implements OnInit {
  
  data = localStorage.getItem('uid')


  enrolldata={
    email:"",
    username:"",
    phonenumber:"",
    address:"",
    qualification:"",
    course:"",
    id:this.data
  }

  constructor(private professorService:ProfessorService,private route:Router) { }

  ngOnInit(): void {
    this.professorService.approvestudent(this.data).subscribe((data)=>{
      this.enrolldata=JSON.parse(JSON.stringify(data))
  })
}

  enroll()
  { this.professorService.approvedstudent(this.enrolldata)
    alert("Sucessfully Approved Student")
    this.route.navigate(["/professor/studentrequest"])
  

  }



}
