import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListingComponent } from './recipe-listing/recipe-listing.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { AddRecipeIngredientComponent } from './AddRecipeIngredient/AddRecipeIngredient.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [,
    RecipeListingComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeAddComponent
,
    AddRecipeIngredientComponent
]
})
export class RecipeModule { }
