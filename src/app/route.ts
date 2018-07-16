
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectdayComponent } from './selectday/selectday.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { MasterComponent } from './master/master.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SuperloginComponent } from './superlogin/superlogin.component';
import { CompletedComponent } from './completed/completed.component';




export const appRoutes : Routes=[
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'day', component: SelectdayComponent},
    {path:'register', component: RegisterComponent},
    {path:'view', component: ViewComponent},
    {path:'master', component: MasterComponent},
    {path:'admin', component: AdminloginComponent},
    {path:'super', component: SuperloginComponent},
    {path:'completed', component: CompletedComponent}
    
    
];