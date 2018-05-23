import { ActivatedRoute } from '@angular/router';
import { IngredientService } from './../../shared/services/ingredient.service';
import { IIngredient } from './../../shared/models/interfaces/IIngredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.css']
})
export class IngredientDetailsComponent implements OnInit {

  public Item : IIngredient;
  private id :number;
    constructor(private ActivatedRoute:ActivatedRoute, private ingredientservice:IngredientService) {
  
   
     }
  
    ngOnInit() {
      
      this.ActivatedRoute.params.subscribe(
       
        (params)=>{ debugger; this.id = params['id'];}
      )
  
     this.Item = this.ingredientservice.GetbyId(this.id);
    }
  

}
