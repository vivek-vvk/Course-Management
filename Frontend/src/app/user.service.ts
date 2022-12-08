import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  server_address: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }
 
  signup(data:any){
    return this.http.post<any>(`${this.server_address}/login/signup`,{data:data})
   }
 
   professorlogin(data:any){
    return this.http.post<any>(`${this.server_address}/login/professorlogin`,{data:data})
   }


   studentlogin(data:any){
    return this.http.post<any>(`${this.server_address}/login/studentlogin`,{data:data})
   }

   course(){
    return this.http.get<any>(`${this.server_address}/home/course`)
   }

   coursecomponent()
   {
   return this.http.get<any>(`${this.server_address}/home/course`)
  }



}
