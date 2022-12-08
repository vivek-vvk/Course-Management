import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  trainerData=[{
    name:"",
    message:"",
    course:"",
    date:"",
    
  }]

  X=localStorage.getItem("email")

  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
    this.studentservice.messagedata(this.X).subscribe((data)=>{
      this.trainerData=JSON.parse(JSON.stringify((data)))
     })
  }


  
  }


