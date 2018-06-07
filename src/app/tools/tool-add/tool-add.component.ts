import { Component, OnInit } from '@angular/core';
import { ToolService } from '../../shared/services/tool.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ISmallTool } from '../../shared/models/interfaces/ISmallTool';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tool-add',
  templateUrl: './tool-add.component.html',
  styleUrls: ['./tool-add.component.css']
})
export class ToolAddComponent implements OnInit {
public newTool:ISmallTool;
public id:number;
public isEdit :boolean = false;
  constructor(private  toolservice:ToolService , private router:Router, private ActivatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    this.newTool={
      name:'',
      description:'',
      img:'',
      id:0
    }
    this.ActivatedRoute.params.subscribe(
        
      (params)=>{ 
        debugger;
         this.id = params['id'];
         if(this.id!=null)
         {
           debugger;
          this.newTool =  this.toolservice.getByIndex(this.id);
          this.isEdit = true;
         }
       }
    )
  }

  onSave(myform:NgForm)
  {
    

    if(this.newTool!=null && myform.valid && this.isEdit== false)
    {
      this.newTool.id = this.toolservice.lengthOfTool+1;
      this.newTool.img = '../assets/images/default.png'
      this.toolservice.AddNewTool(this.newTool);   
           
    }
    else if(this.isEdit == true)
    {
      debugger;
      this.toolservice.Edit(this.newTool);
    }

    this.router.navigate(['ToolListing']) ; 
  }

  onCancel()
  {
    this.router.navigate(['ToolListing']) ;      
  }

}
