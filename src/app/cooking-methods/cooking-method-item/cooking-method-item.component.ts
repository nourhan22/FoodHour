import { Component, OnInit, Input} from '@angular/core';
import { IcookingMethod } from 'src/app/shared/models/interfaces/icooking-method';
import { CookingMethodService } from 'src/app/shared/services/cookingMethod.service';

// import {IcookingMethod} from './src/shared/models/interfaces/icooking-method';
@Component({
  selector: 'app-cooking-method-item',
  templateUrl: './cooking-method-item.component.html',
  styleUrls: ['./cooking-method-item.component.css']
})

export class CookingMethodItemComponent implements OnInit {
@Input() public item: IcookingMethod;
//public onDelete;
//public v;

  constructor(private cookingMethodService:CookingMethodService) {
    
    
  }
  ngOnInit() {
  
   // this.onDelete=this.cookingMethodService.onDelete(this.item.id);
  }
  onDelete(id:number){
  
    this.cookingMethodService.onDelete(id);
  }
}
