import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-request',
  templateUrl: './student-request.component.html',
  styleUrls: ['./student-request.component.css']
})
export class StudentRequestComponent implements OnInit {

  constructor(private professorService:ProfessorService, private route:Router) { }

  studentData=
  [{
    email:"",
    username:"",
    qualification:"",
    course:"",
  }]

  ngOnInit(): void {
    this.professorService.getrequest().subscribe((data)=>{
      this.studentData=JSON.parse(JSON.stringify(data))
    })
  }

  approvestudent(id:any){
    localStorage.setItem("uid" , id._id)
    this.route.navigate(["/professor/approvestudent"])
  }

  rejectstudent(id: any){
    if(confirm(`Are you sure Want to delete ${id.username}`)){
    this.professorService.rejectstudent(id._id).subscribe((data)=>{
      this.studentData=this.studentData.filter(p=>p!==id)
    })
   }
  }

}


