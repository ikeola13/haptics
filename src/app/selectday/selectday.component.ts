import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-selectday',
  templateUrl: './selectday.component.html',
  styleUrls: ['./selectday.component.css']
})
export class SelectdayComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
    disableUntil: {year: 2018, month: 6, day: 29},
    disableSince: {year: 2018, month: 7, day: 29},

};


// Initialized to specific date (09.10.2018).
public model: any = { };

  constructor(public dataService: DataService) { }

  ngOnInit() {
    
  }

  get(session:HTMLInputElement){
    console.log(this.model.formatted,session.value);
    this.dataService.date = this.model.formatted;
    this.dataService.session = session.value;

  }

}
