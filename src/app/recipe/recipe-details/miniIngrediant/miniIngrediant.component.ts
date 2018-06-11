import { Component, OnInit } from '@angular/core';
import {IRecipe} from 'src/app/shared/models/interfaces/IRecipe';
import { Input } from '@angular/core';
@Component({
  selector: 'app-miniIngrediant',
  templateUrl: './miniIngrediant.component.html',
  styleUrls: ['./miniIngrediant.component.css']
})
export class MiniIngrediantComponent implements OnInit {
  @Input() RecipeItem:IRecipe;
  constructor() { }

  ngOnInit() {
  }

}
