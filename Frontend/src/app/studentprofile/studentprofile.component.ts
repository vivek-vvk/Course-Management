import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {
  id = localStorage.getItem("email")

  student={
    username:"",
    id:"",
    phonenumber:"",
    email:"",
    address:"",
    qualification:"",
    companyName:"",
    designation:"",
    course:"",
    image:"",
    datejoin:"",
    quote:""
  
  };
  constructor(private studentService:StudentService) { }



  ngOnInit(): void {
    this.studentService.getprofile(this.id).subscribe((data)=>{
      this.student=JSON.parse(JSON.stringify(data))
 
    })
  }






}
