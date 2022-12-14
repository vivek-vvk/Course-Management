import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  constructor(private auth:AuthService) { }
 
  id=localStorage.getItem('email');

  ngOnInit(): void {
    this.auth.verifieduser(this.id)
  }

}
