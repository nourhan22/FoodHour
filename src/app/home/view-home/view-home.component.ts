import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/Recipe.service';
import { IRecipe } from '../../shared/models/interfaces/IRecipe';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
  
  

  constructor() { }

  ngOnInit() {
  }

}
