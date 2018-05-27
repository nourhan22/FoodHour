
import { IIngredientNutiritions } from './../../../shared/models/interfaces/IIngredientNutiritions';
import { Component, OnInit } from '@angular/core';
import { IngredientNutiritionService } from '../../../shared/services/ingredientNutirition.service';

@Component({
  selector: 'app-ingredient-nutiritions',
  templateUrl: './ingredient-nutiritions.component.html',
  styleUrls: ['./ingredient-nutiritions.component.css']
})
export class IngredientNutiritionsComponent implements OnInit {
public ingredientNutiritions: IIngredientNutiritions[];
  constructor(private ingredientNutiritionService:IngredientNutiritionService )
   { }

  ngOnInit() {
    this.ingredientNutiritionService.GetAllNutiritions().subscribe(
      (data)=>{ this.ingredientNutiritions = data}
     );
  }

}
