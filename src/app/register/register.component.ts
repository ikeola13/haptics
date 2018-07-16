import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public dataService: DataService,private router: Router) { }

  ngOnInit() {
  }

  reg(nam:HTMLInputElement,phone:HTMLInputElement,email:HTMLInputElement){

    console.log(nam.value,phone.value,email.value,this.dataService.center_name,this.dataService.date,this.dataService.session);
    this.router.navigateByUrl("/completed");

  }

}
