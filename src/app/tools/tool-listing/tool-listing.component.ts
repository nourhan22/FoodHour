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
        img:'./assets/images/cooker3.jpg'
      },
      {
        name:'Cooker',
        img:'./assets/images/cooker3.jpg'
      },
      {
        name:'Cooker',
        img:'./assets/images/cooker3.jpg'
      },
      {
        name:'Cooker',
        img:'./assets/images/cooker3.jpg'
      },
      {
        name:'Cooker',
        img:'./assets/images/cooker3.jpg'
      },
      {
        name:'Cooker',
        img:'./assets/images/cooker3.jpg'
      },
      {
        name:'Cooker',
        img:'./assets/images/cooker3.jpg'
      },
      {
        name:'Cooker',
        img:'./assets/images/cooker3.jpg'
      },
      {
        name:'Cooker',
        img:'./assets/images/cooker3.jpg'
      }
    ]
  }

}
