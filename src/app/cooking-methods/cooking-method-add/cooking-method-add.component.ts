import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookingMethodService}from 'src/app/shared/services/cookingMethod.service';
import { NgForm } from '@angular/forms';
import { IcookingMethod} from 'src/app/shared/models/interfaces/icooking-method';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cooking-method-add',
  templateUrl: './cooking-method-add.component.html',
  styleUrls: ['./cooking-method-add.component.css']
})
export class CookingMethodAddComponent implements OnInit {
public newCookingMethod :IcookingMethod;
public id:number;
public isEdit :boolean = false;

  constructor(private  cookingMethodService:CookingMethodService , private router:Router,private ActivatedRoute:ActivatedRoute) { 

  }

  ngOnInit() {
    this.newCookingMethod={
      title:'',
      description:'',
      imageUrl:'',
      id:0
    }

    this.ActivatedRoute.params.subscribe(
      
       (params)=>{ 
         debugger;
          this.id = params['id'];
          if(this.id!=null)
          {
            debugger;
           this.newCookingMethod=  this.cookingMethodService.getByIndex(this.id);
           this.isEdit = true;
          }
        }
     )
  }
  
  onSave(myform:NgForm)
  {
    if(this.newCookingMethod!=null&& myform.valid && this.isEdit== false)
    {
      debugger;
      this.newCookingMethod.id = this.cookingMethodService.lengthOfCookingMethod+1;
      this.newCookingMethod.imageUrl = '../assets/images/default.png';
      this.cookingMethodService.AddNewCooKingMethod(this.newCookingMethod);   
      
    }
    else if(this.isEdit == true)
    {
      debugger;
      this.cookingMethodService.Edit(this.newCookingMethod);
    }
    this.router.navigate(['cookingMethodListing']) ; 
  }

  onCancel()
  {
    this.router.navigate(['cookingMethodListing']) ;      
  }

}
