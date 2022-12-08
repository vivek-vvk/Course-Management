import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

user={
  email:"",
  password:"",
  role:"Student"
}



  constructor( private userService:UserService,private route:Router) { }

  ngOnInit(): void {
  }


  loginuser(){
    this.userService.studentlogin(this.user).subscribe((res)=>{

      if(res.status){
        localStorage.setItem('token' , res.token)
        localStorage.setItem('email' , res.email)
        localStorage.setItem('username' , res.username)
        this.route.navigate(['/student'])

       }else{
        console.log(res.data)
        var error = res.data;
        alert(error);
       }

        })
  }
 





}
