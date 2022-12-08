import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-studentenroll',
  templateUrl: './studentenroll.component.html',
  styleUrls: ['./studentenroll.component.css']
})
export class StudentenrollComponent implements OnInit {




  constructor(private studentService:StudentService,private route :Router,private userService:UserService) { }

  x = localStorage.getItem('email')
  y = localStorage.getItem('username')

enrolldata=  
{
  email:this.x,
  username :this.y,
  phonenumber:"",
  address:"",
  qualification:"",
 course:""
            }

 courses=[{
             title:"",
             description:"",
            image:"",
            }]
            
  ngOnInit(): void {
    this.userService.course().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
  }

  enroll(){
    this.studentService.enrollstudent(this.enrolldata);
    alert("Sucessfully Registered");
    this.route.navigate(["/student"]);

  }



}
