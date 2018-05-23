import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientAddComponent } from './ingredient-add/ingredient-add.component';
import { IngredientItemComponent } from './ingredient-item/ingredient-item.component';
import { IngredientListingComponent } from './ingredient-listing/ingredient-listing.component';

import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IngredientAddComponent, IngredientItemComponent, IngredientListingComponent,

    IngredientDetailsComponent
]
})
export class IngredientsModule { }
