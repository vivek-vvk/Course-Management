import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private userService:UserService) { }
  courses=[{
    title:"",
    description:"",
   image:""
  }]
  ngOnInit(): void {
    this.userService.course().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
  }

}
