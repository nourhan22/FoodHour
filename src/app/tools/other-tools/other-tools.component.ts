import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ISmallTool } from 'src/app/shared/models/interfaces/ISmallTool';
import {ToolService} from 'src/app/shared/services/tool.service';
@Component({
  selector: 'app-other-tools',
  templateUrl: './other-tools.component.html',
  styleUrls: ['./other-tools.component.css']
})
export class OtherToolsComponent implements OnInit {
  @Input() public item:ISmallTool;
  constructor() { }

  ngOnInit() {
  }

}
