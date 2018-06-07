import { IIngredientNutiritions } from './../../../../shared/models/interfaces/IIngredientNutiritions';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient-nutirition-Item',
  templateUrl: './ingredient-nutirition-Item.component.html',
  styleUrls: ['./ingredient-nutirition-Item.component.css']
})
export class IngredientNutiritionItemComponent implements OnInit {
  @Input() public item:IIngredientNutiritions;
  constructor() { }

  ngOnInit() {
  }

}
