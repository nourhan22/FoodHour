import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookingMethodService}from 'src/app/shared/services/cookingMethod.service';
import { IcookingMethod} from 'src/app/shared/models/interfaces/icooking-method'
@Component({
  selector: 'app-cooking-method-add',
  templateUrl: './cooking-method-add.component.html',
  styleUrls: ['./cooking-method-add.component.css']
})
export class CookingMethodAddComponent implements OnInit {
public newCookingMethod :IcookingMethod;

  constructor(private  cookingMethodService:CookingMethodService , private router:Router) { 

  }

  ngOnInit() {
    this.newCookingMethod={
      title:'',
      description:'',
      imageUrl:'',
      id:0
    }

    
  }
  
  onSave()
  {
    if(this.newCookingMethod!=null)
    {
      debugger;
      this.newCookingMethod.id = this.cookingMethodService.lengthOfCookingMethod+1;
      this.newCookingMethod.imageUrl = '../assets/images/default.png';
      this.cookingMethodService.AddNewCooKingMethod(this.newCookingMethod);   
      this.router.navigate(['cookingMethodListing']) ;  
    }
  }

  onCancel()
  {
    this.router.navigate(['cookingMethodListing']) ;      
  }

}
