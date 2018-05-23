import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { IcookingMethod } from 'src/app/shared/models/interfaces/icooking-method';
import { CookingMethodService } from 'src/app/shared/services/cookingMethod.service';

@Component({
  selector: 'app-cooking-method-details',
  templateUrl: './cooking-method-details.component.html',
  styleUrls: ['./cooking-method-details.component.css']
})
export class CookingMethodDetailsComponent implements OnInit {
  @Input() public item: IcookingMethod;
  private id :number;
  constructor(private ActivatedRoute:ActivatedRoute, private cookingMethodService:CookingMethodService) { 
    this.ActivatedRoute.params.subscribe(
      
       (params)=>{this.id = params['id'];}
     )
 
    this.item = this.cookingMethodService.getByIndex(this.id);
 
  }

  ngOnInit() {
    
  
  }

}
