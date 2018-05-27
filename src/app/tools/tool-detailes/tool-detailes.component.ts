import { Component, OnInit, Input } from '@angular/core';
import { ISmallTool } from '../../shared/models/interfaces/ISmallTool';
import { ActivatedRoute } from '@angular/router';
import { ToolService } from '../../shared/services/tool.service';

@Component({
  selector: 'app-tool-detailes',
  templateUrl: './tool-detailes.component.html',
  styleUrls: ['./tool-detailes.component.css']
})
export class ToolDetailesComponent implements OnInit {

  @Input() public item: ISmallTool;
  private id :number;
  constructor(private ActivatedRoute:ActivatedRoute, private toolservice:ToolService) { 
    this.ActivatedRoute.params.subscribe(
      
       (params)=>{this.id = params['id'];}
     )
 
    this.item = this.toolservice.getByIndex(this.id);
 
  }

  ngOnInit() {
  }

}
