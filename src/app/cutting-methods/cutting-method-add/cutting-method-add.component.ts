import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuttingService } from 'src/app/shared/services/Cutting.service';
import { Router } from '@angular/router';
import { ICuttingMethods } from 'src/app/shared/models/interfaces/iCuttingMethods';
import { IUnitType } from 'src/app/shared/models/interfaces/IUnitType';
import { NgForm, NgControl } from '@angular/forms';
import {FormControl,FormGroup} from '@angular/forms';
import { ToolService } from 'src/app/shared/services/tool.service';
import { ISmallTool } from 'src/app/shared/models/interfaces/ISmallTool';


@Component({
  selector: 'app-cutting-method-add',
  templateUrl: './cutting-method-add.component.html',
  styleUrls: ['./cutting-method-add.component.css']
})
export class CuttingMethodAddComponent implements OnInit {
  public addCutting:ICuttingMethods;
  public unitType:IUnitType[];
  public units:string[];
  public tool:ISmallTool[];
  public checked;
  // toppings = new FormControl();
  // toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
   constructor(private cutService : CuttingService , private router:Router 
     ,private ActivatedRoute:ActivatedRoute ,private ToolService:ToolService) { }

  ngOnInit() {
    this.unitType=this.cutService.unitType;
    this.units=this.cutService.units;
    this.ToolService.getAll().subscribe(
      (data)=>{this.tool=data;} );
    this.addCutting={
      title:'',
      imageUrl: '',
      id: 0,
      Description:'',
      Length:0,
      width:0,
      height:0,
      unitType:'',
      units:'',
      tools:[]
    }
    this.checked = false;
  }
  onSave(myform:NgForm)
  {
    

    if(this.addCutting!=null && myform.valid )
    {
      this.addCutting.id = this.cutService.cuttingMethods.length+1;
      this.addCutting.imageUrl = '../assets/images/default.png'
      this.cutService.cuttingMethods.push(this.addCutting);  
      

           
    }
    // else if(this.isEdit == true)
    // {
    //   debugger;
    //   this.microService.Edit(this.newMicro);
    // }

    this.router.navigate(['cuttingMethodListing']) ; 
  }

  onCancel()
  {
    this.router.navigate(['cuttingMethodListing']) ;      
  }

  onChecked(item:ISmallTool)
  {
    console.log(item.checked);
    if(item.checked==false){
        this.addCutting.tools.push(item);
    }
  }

}
