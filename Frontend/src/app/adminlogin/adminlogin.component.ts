import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin={

    email:"",
    password:"",
    role:"Professor"

  }
  constructor(private userService:UserService, private route:Router) { }

  ngOnInit(): void {
  }


  adminlogin()
     {
   
    this.userService.professorlogin(this.admin).subscribe((res)=>{
       if(res.status){
        localStorage.setItem('tokens' , res.token)
        localStorage.setItem('pname' , res.username)
        localStorage.setItem('pemail' , res.email)
        this.route.navigate(['/professor'])

       }else{
        console.log(res.data)
        var error = res.data;
        alert(error);
       }
      
      })
   }




}
