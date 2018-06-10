import { Component, OnInit } from '@angular/core';
import {IRecipe} from 'src/app/shared/models/interfaces/IRecipe';
import { Input } from '@angular/core';
@Component({
  selector: 'app-miseEnPlace',
  templateUrl: './miseEnPlace.component.html',
  styleUrls: ['./miseEnPlace.component.css']
})
export class MiseEnPlaceComponent implements OnInit {
  @Input() RecipeItem:IRecipe;
  constructor() { }

  ngOnInit() {
  }

}
