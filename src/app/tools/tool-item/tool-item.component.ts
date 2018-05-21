import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ISmallTool } from 'src/app/shared/models/interfaces/ISmallTool';

@Component({
  selector: 'app-tool-item',
  templateUrl: './tool-item.component.html',
  styleUrls: ['./tool-item.component.css']
})
export class ToolItemComponent implements OnInit {
  @Input() public item:ISmallTool;
  constructor() { }

  ngOnInit() {
    debugger;
  }

}
