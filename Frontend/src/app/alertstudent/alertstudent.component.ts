import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-alertstudent',
  templateUrl: './alertstudent.component.html',
  styleUrls: ['./alertstudent.component.css']
})
export class AlertstudentComponent implements OnInit {

  constructor(private userService:UserService,private professorService:ProfessorService ) { }

  courses=[{
    title:"",
    description:"",
    image:"",
  }]

 x = localStorage.getItem("pname")
  enrolldata={
    course:"",
    message:"",
    professor:this.x

  }


  ngOnInit(): void {
    this.userService.coursecomponent().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
  }


  messagealert(){
    this.professorService.bulknotification(this.enrolldata).subscribe((data:any)=>{
      if(data.status){
        alert("Sucessfully Generated Alert");
      }else{
        alert("Error");
      }
     })
     location.reload();
    }
  




}
