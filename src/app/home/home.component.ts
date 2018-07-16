import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  center_name = "center";
  location = "lagos";
  seats = "40";

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  next(){
    this.dataService.center_name = this.center_name;
    this.dataService.location = this.location;
    this.dataService.seats = this.seats;

  }

}
