import { Component, OnInit, Input } from '@angular/core';
import { IIngredient } from 'src/app/shared/models/interfaces/IIngredient';
import { IRecipeIngredient } from 'src/app/shared/models/interfaces/IRecipeIngredient';

@Component({
  selector: 'app-recipe-ingredient-item',
  templateUrl: './recipe-ingredient-item.component.html',
  styleUrls: ['./recipe-ingredient-item.component.css']
})
export class RecipeIngredientItemComponent implements OnInit {
  @Input() ingredient:IRecipeIngredient;
  constructor() { }

  ngOnInit() {

  }

}
