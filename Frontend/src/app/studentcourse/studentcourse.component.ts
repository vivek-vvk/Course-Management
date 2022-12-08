import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentcourse',
  templateUrl: './studentcourse.component.html',
  styleUrls: ['./studentcourse.component.css']
})
export class StudentcourseComponent implements OnInit {
  courses=[{
    title:"",
    description:"",
    image:"",
  }]



  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
    this.userService.coursecomponent().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
  }

  clicked(){
    this.route.navigate(["/student/studentenroll"])
  }


}
