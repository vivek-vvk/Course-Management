import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { UserService } from './user.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { StudentcourseComponent } from './studentcourse/studentcourse.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { ProfessorprofileComponent } from './professorprofile/professorprofile.component';
import { StudentenrollComponent } from './studentenroll/studentenroll.component';
import { CourseComponent } from './course/course.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ApprovestudentComponent } from './approvestudent/approvestudent.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { StudentRequestComponent } from './student-request/student-request.component';
import { ApprovedstudentComponent } from './approvedstudent/approvedstudent.component';
import { AlertstudentComponent } from './alertstudent/alertstudent.component';
import { MessageComponent } from './message/message.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    SignupComponent,
    LoginComponent,
    StudentloginComponent,
    AdminloginComponent,
    ProfessorComponent,
    StudentComponent,
    StudentcourseComponent,
    StudentprofileComponent,
    ProfessorprofileComponent,
    StudentenrollComponent,
    CourseComponent,
    AddcourseComponent,
    ApprovestudentComponent,
    ProfessorDashboardComponent,
    StudentRequestComponent,
    ApprovedstudentComponent,
    AlertstudentComponent,
    MessageComponent,
    StudenthomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService, {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
