import { Component, OnInit } from '@angular/core';
// import { Service1Service } from '../service1.service';


@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {
  datadisplay:any;
  username:any
  firstname="";
  

  constructor() { }

  


  ngOnInit(): void {
    
  }
 
}

