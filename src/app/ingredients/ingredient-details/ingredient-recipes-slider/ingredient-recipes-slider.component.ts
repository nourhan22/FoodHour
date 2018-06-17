import { Component, OnInit, Input } from '@angular/core';
import { IIngredient } from '../../../shared/models/interfaces/IIngredient';

@Component({
  selector: 'app-ingredient-recipes-slider',
  templateUrl: './ingredient-recipes-slider.component.html',
  styleUrls: ['./ingredient-recipes-slider.component.css']
})
export class IngredientRecipesSliderComponent implements OnInit {

  constructor() { }
  @Input() public item: IIngredient;
  ngOnInit() {
  }

}
