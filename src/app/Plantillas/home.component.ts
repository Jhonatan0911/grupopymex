import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  parrafo1:boolean = true;
  parrafo2:boolean = false;
  parrafo3:boolean = false;
  parrafo4:boolean = false;
  parrafo5:boolean = false;
  parrafo6:boolean = false;
  constructor() { }

  ngOnInit(): void {
   
  }

}
