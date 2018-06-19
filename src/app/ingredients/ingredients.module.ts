import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientAddComponent } from './ingredient-add/ingredient-add.component';
import { IngredientItemComponent } from './ingredient-item/ingredient-item.component';
import { IngredientListingComponent } from './ingredient-listing/ingredient-listing.component';
import { RecipeIngredientItemComponent } from './recipe-ingredient-item/recipe-ingredient-item.component';

import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterModule.forChild([
      {path:'IngredientListing', component:IngredientListingComponent},
      {path:'IngredientDetails/:id' , component:IngredientDetailsComponent},
      {path:'IngredientListing/add' , component:IngredientAddComponent},
      {path:'IngredientListing/edit/:id' , component:IngredientAddComponent},
    ])
  ],
  declarations: [IngredientAddComponent, IngredientItemComponent, IngredientListingComponent,
    IngredientDetailsComponent

    
],
exports:
[
  RecipeIngredientItemComponent
]
})
export class IngredientsModule { }


