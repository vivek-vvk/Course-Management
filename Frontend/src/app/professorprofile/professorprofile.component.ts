import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professorprofile',
  templateUrl: './professorprofile.component.html',
  styleUrls: ['./professorprofile.component.css']
})
export class ProfessorprofileComponent implements OnInit {

  constructor() { }

  id = localStorage.getItem("pemail")
  name = localStorage.getItem("pname")

  imageWidth : number =150;
  imageMargin :number =15;

  student={
    name:this.name,
    email:this.id
  };

  ngOnInit(): void {
  }

}
