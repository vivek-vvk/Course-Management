import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './student/student.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentGuard } from './student.guard';
import { ProfessorGuard } from './professor.guard';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StudentenrollComponent } from './studentenroll/studentenroll.component';
import { StudentcourseComponent } from './studentcourse/studentcourse.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CourseComponent } from './course/course.component';
import { ApprovestudentComponent } from './approvestudent/approvestudent.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { StudentRequestComponent } from './student-request/student-request.component';
import { ApprovedstudentComponent } from './approvedstudent/approvedstudent.component';
import { ProfessorprofileComponent } from './professorprofile/professorprofile.component';
import { AlertstudentComponent } from './alertstudent/alertstudent.component';
import { MessageComponent } from './message/message.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"course",component:CourseComponent},
  
  {path:'login',component:LoginComponent,
     children:[
    {path:"",component:StudentloginComponent},
    {path:"professorlogin",component:AdminloginComponent} 
  ]},

    
  {path:'professor', canActivate:[ProfessorGuard],  component:ProfessorComponent,
     children:[
                {path:'addcourse',component:AddcourseComponent },
                {path:'approvestudent',component:ApprovestudentComponent},
                {path:'professordasboard',component:ProfessorDashboardComponent},
                {path:'studentrequest',component:StudentRequestComponent},
                {path:'approvedstudents',component:ApprovedstudentComponent},
                {path:'profile',component:ProfessorprofileComponent},
                {path:'alertstudent',component:AlertstudentComponent}
               
              ]},
  
  {path:'student',canActivate:[StudentGuard], component:StudentComponent,
     children:[
        {path:'',component:StudenthomeComponent},
        {path:'studentprofile',component:StudentprofileComponent},
        {path:'studentenroll',component:StudentenrollComponent},
        {path:'studentcourse',component:StudentcourseComponent},
        {path:'message',component:MessageComponent}
      ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
