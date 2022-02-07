import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';
// import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-compo',
  templateUrl: './compo.component.html',
  styleUrls: ['./compo.component.css']
})
export class CompoComponent implements OnInit {

  constructor() { }
  datavalue:any;
  display="";
  Showmsg="this is the example of custom pipe"

  ngOnInit(): void {
    
}

}


 




