import { Component, OnInit } from '@angular/core';
import { ToolService } from '../../shared/services/tool.service';
import { Router } from '@angular/router';
import { ISmallTool } from '../../shared/models/interfaces/ISmallTool';

@Component({
  selector: 'app-tool-add',
  templateUrl: './tool-add.component.html',
  styleUrls: ['./tool-add.component.css']
})
export class ToolAddComponent implements OnInit {
public newTool:ISmallTool;
  constructor(private  toolservice:ToolService , private router:Router) { }

  ngOnInit() {
    this.newTool={
      name:'',
      description:'',
      img:'',
      id:0
    }
  }

  onSave()
  {
    if(this.newTool!=null)
    {
      debugger;
      this.newTool.id = this.toolservice.lengthOfTool+1;
      this.newTool.img = '../assets/images/default.png';
      this.toolservice.AddNewTool(this.newTool)  
      this.router.navigate(['ToolListing']) ;  
    }
  }

  onCancel()
  {
    this.router.navigate(['ToolListing']) ;      
  }

}
