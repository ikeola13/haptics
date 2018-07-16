import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  clicked = true;

  constructor() { }

  ngOnInit() {
  }

  printer(){
    this.clicked = false;
    setTimeout(()=>{ 
    window.print();
    },1000)
  }

}
