import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './Teacher/Teacher.component';

import { ShowTeacherComponent } from './Teacher/show-Teacher/show-teacher.component';
import { AddTeacherComponent } from './Teacher/add-Teacher/add-teacher.component';
import { SharedService } from './shared.service';


import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    ShowTeacherComponent,
    AddTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
