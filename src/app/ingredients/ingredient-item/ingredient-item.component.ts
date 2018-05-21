import { IIngredient } from './../../shared/models/interfaces/IIngredient';
import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.css']
})
export class IngredientItemComponent implements OnInit {
  @Input() public item:IIngredient;
  constructor() { }

  ngOnInit() {
  }

}
