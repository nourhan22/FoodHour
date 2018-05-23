import { IIngredient } from './../../../shared/models/interfaces/IIngredient';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient-description',
  templateUrl: './ingredient-description.component.html',
  styleUrls: ['./ingredient-description.component.css']
})
export class IngredientDescriptionComponent implements OnInit {

  constructor() { }
  @Input() public item: IIngredient;
  ngOnInit() {
  }

}
