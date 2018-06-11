import { Component, OnInit } from '@angular/core';
import {IRecipe} from 'src/app/shared/models/interfaces/IRecipe';
import { Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() item:IRecipe[];
  constructor() { }

  ngOnInit() {
  }

}
