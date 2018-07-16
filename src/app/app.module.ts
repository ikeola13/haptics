import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectdayComponent } from './selectday/selectday.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './route';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ViewComponent } from './view/view.component';
import { MasterComponent } from './master/master.component';
import { MyDatePickerModule } from 'mydatepicker';
import { SuperloginComponent } from './superlogin/superlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

import {DataService} from './services/data.service';
import { CompletedComponent } from './completed/completed.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectdayComponent,
    RegisterComponent,
    ViewComponent,
    MasterComponent,
    SuperloginComponent,
    AdminloginComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    MyDatePickerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
