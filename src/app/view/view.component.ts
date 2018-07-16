import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
    // disableUntil: {year: 2018, month: 6, day: 29},
    // disableSince: {year: 2018, month: 7, day: 29},

};

  public myDatePickerOptionstart: IMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
    // disableUntil: {year: 2018, month: 6, day: 29},
    // disableSince: {year: 2018, month: 7, day: 29},

};

public myDatePickerOptionend: IMyDpOptions = {
  // other options...
  dateFormat: 'dd-mm-yyyy',
  // disableUntil: {year: 2018, month: 6, day: 29},
  // disableSince: {year: 2018, month: 7, day: 29},

};

// Initialized to specific date (09.10.2018).
public model: any = { };

  constructor() { }

  Attendees = false;
  Sessions = false;

  ngOnInit() {
  }

 


  registerUser(form: NgForm) {
    // console.log(form.value);
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
    console.log(form.value.mydate.formatted);
    console.log(form.value.mydate.jsdate)

    console.log(form.value.session);

  }


  viewattend(){
    this.Attendees = true;
  this.Sessions = false;

  }
  viewsess(){
    this.Attendees = false;
    this.Sessions = true;
  }

}
