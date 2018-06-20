import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../shared/models/interfaces/IRecipe';
import { RecipeService } from '../../shared/services/Recipe.service';

@Component({
  selector: 'app-home-recipe',
  templateUrl: './home-recipe.component.html',
  styleUrls: ['./home-recipe.component.css']
})
export class HomeRecipeComponent implements OnInit {
  public recipes:IRecipe[];
  constructor(private RecipeService :RecipeService) { }

  ngOnInit() {
    this.RecipeService.getAll().subscribe(
      (data)=>{ this.recipes = data}
     );
  }
  onDelete()
  {
    
    this.RecipeService.DeleteAll();
  }
}
