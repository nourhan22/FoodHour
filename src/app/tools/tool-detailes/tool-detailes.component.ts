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
  public Tools:ISmallTool[];
  public rnd1:number;
  public rnd2:number;
  public rnd3:number;
  @Input() public item: ISmallTool;
  private id :number;
  constructor(private ActivatedRoute:ActivatedRoute, private toolservice:ToolService) { 
    this.ActivatedRoute.params.subscribe(
      
       (params)=>{this.id = params['id'];
    this.item = this.toolservice.getByIndex(this.id);
  }
     );
 

 
  }
  headerTitle:string;
  ngOnInit() {
    this.headerTitle='Tools';
    this.toolservice.getAll().subscribe(
      (data)=>{
        this.Tools= data;
        this.rnd1 = this.randomIntFromInterval(0,this.Tools.length-1);
        this.rnd2 = this.randomIntFromInterval(0,this.Tools.length-1);
        this.rnd3 = this.randomIntFromInterval(0,this.Tools.length-1);
      }

    );
 
  }

  randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

}
