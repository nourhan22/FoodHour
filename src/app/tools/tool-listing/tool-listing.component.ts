import { Component, OnInit } from '@angular/core';
import { ISmallTool } from 'src/app/shared/models/interfaces/ISmallTool';
@Component({
  selector: 'app-tool-listing',
  templateUrl: './tool-listing.component.html',
  styleUrls: ['./tool-listing.component.css']
})
export class ToolListingComponent implements OnInit {

  public Tools:ISmallTool[];
  constructor() { }

  ngOnInit() {
    debugger;
    this.Tools = [
      {
        name:'Cooker',
        img:'./assets/images/cooker3.jpg',
        id:1
      },
      {
        name:'Food Cutter',
        img:'./assets/images/tool/Food Cutter.jpg',
        id:2
      },
      {
        name:'Grill',
        img:'./assets/images/tool/grill.jpg',
        id:3
      },
      {
        name:'Knife',
        img:'./assets/images/tool/knife.jpg',
        id:4
      },
      {
        name:'Oven',
        img:'./assets/images/tool/oven2.jpg',
        id:5
      },
      {
        name:'Cooker',
        img:'./assets/images/cooker3.jpg',
        id:6
      },
      {
        name:'Rangetop',
        img:'./assets/images/tool/rangetop.jpg',
        id:7
      },
      {
        name:'Cooker',
        img:'./assets/images/cooker3.jpg',
        id:8
      },
      {
        name:'Cooker',
        img:'./assets/images/cooker3.jpg',
        id:9
      }
    ]
  }

}
