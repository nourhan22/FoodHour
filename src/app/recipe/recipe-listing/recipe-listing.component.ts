import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/shared/models/interfaces/IRecipe';
import{RecipeService}from 'src/app/shared/services/Recipe.service';
@Component({
  selector: 'app-recipe-listing',
  templateUrl: './recipe-listing.component.html',
  styleUrls: ['./recipe-listing.component.css']
})
export class RecipeListingComponent implements OnInit {
  public headertitle:string;
  public recipes:IRecipe[];
  constructor( private RecipeService :RecipeService) { }

  ngOnInit() {
    this.headertitle = 'Recipes';
    this.RecipeService.getAll().subscribe(
      (data)=>{ this.recipes = data}
     );
  }
  onDelete()
  {
    
    this.RecipeService.DeleteAll();
  }
  onRecipeSearch(txtSearch:string)
  {
    if( txtSearch!=null)
    {
     // this.recipes = this.RecipeService.SearchInRecipes(txtSearch);
    }
    
  }
}
