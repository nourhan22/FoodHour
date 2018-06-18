import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cut-tool',
  templateUrl: './cutTool.component.html',
  styleUrls: ['./cutTool.component.css']
})
export class CutToolComponent implements OnInit {
  @Input() public cut:any;
  constructor(){}
  ngOnInit(){
    debugger;
    console.log(this.cut);
    
  }
}
