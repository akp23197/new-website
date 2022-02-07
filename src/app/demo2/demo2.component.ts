import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  displaymsg:any
  postId:any
    constructor(private cmn:DemoService) { }

  ngOnInit(): void {
   this.cmn.display().subscribe(value=>{
     
     if(this.displaymsg.postId==1){
      this.displaymsg=value;     
     }
     
   })
  }
}


