import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
@Component({
  selector: 'app-approvedstudent',
  templateUrl: './approvedstudent.component.html',
  styleUrls: ['./approvedstudent.component.css']
})
export class ApprovedstudentComponent implements OnInit {

  studentData=
  [{
    email:"",
    username:"",
    qualification:"",
    course:"",
    address:"",
    phonenumber:""
  }]


  constructor(private professorService:ProfessorService) { }

  ngOnInit(): void {
    this.professorService.getapprovedstudent().subscribe((data)=>{
      this.studentData = JSON.parse(JSON.stringify(data))
    })
  }

  rejectstudent(id: any){
    if(confirm(`Are you sure Want to Delete ${id.username}`)){
    this.professorService.rejectapprovedstudent(id._id).subscribe((data)=>{
      this.studentData=this.studentData.filter(p=>p!==id)
    })
   }
  }
  
}
