import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  server_address: string = 'http://localhost:3000';
 
  constructor(private http:HttpClient) { }

addcourse(data:any){
  return this.http.post(`${this.server_address}/professor/addcourse`,data)
}

approvestudent(id:any){
  return this.http.get(`${this.server_address}/professor/approvestudent/${id}`)
}

getrequest(){
  return this.http.get(`${this.server_address}/professor/getrequest`)
}


rejectstudent(id:any){
  return this.http.delete(`${this.server_address}/professor/deletreq/${id}`,)
}

approvedstudent(data:any){
  return this.http.post(`${this.server_address}/professor/approveddata`,data).subscribe((data)=>{
    console.log(data)
})}

getCount(){
  return this.http.get(`${this.server_address}/professor/getcount`)
 }

 getapprovedstudent(){
  return this.http.get(`${this.server_address}/professor/getapproveddata`)
 }

 bulknotification(data:any){
  return this.http.post(`${this.server_address}/professor/bulknotification`,data)
 }


 rejectapprovedstudent(id:any){
  return this.http.delete(`${this.server_address}/professor/deletapproved/${id}`,)
}


}
