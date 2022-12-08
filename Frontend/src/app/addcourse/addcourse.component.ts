import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  
  coursedata={
    title :"",
    description:"",
    image:""

  }
  constructor(private proff:ProfessorService,private route:Router) { }

  ngOnInit(): void {
  }

  messagealert()
  {
this.proff.addcourse(this.coursedata).subscribe((data:any)=>{
  if(data.status){
    alert("Sucessfully Added Course");
    this.route.navigate(["/professor"]);
  }else{
    alert("Error");
  }
})
  }



}
