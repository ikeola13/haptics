import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor() { }

  users= false;
  centers = false;

  ngOnInit() {
  }

  viewusers(){
   this.users = true;
   this.centers = false;
  }
  viewcenters(){
    this.users = false;
   this.centers = true;

  }

  user(name:HTMLInputElement,email:HTMLInputElement,password:HTMLInputElement,phone:HTMLInputElement,center:HTMLInputElement){
    console.log(name.value,email.value,password.value,phone.value,center.value);

  }
  cen(centername:HTMLInputElement,location:HTMLInputElement,seats:HTMLInputElement){
    console.log(centername.value,location.value,seats.value);

  }
}
