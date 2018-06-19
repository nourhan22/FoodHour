import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ServicesComponent } from './services/services.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { HomeRecipeComponent } from './home-recipe/home-recipe.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { HomerecipeItemComponent } from './homerecipe-item/homerecipe-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [,
    SliderComponent,
    WhoWeAreComponent,
    ServicesComponent,
    ViewHomeComponent,
    HomeRecipeComponent,
    RecipeItemComponent,
    HomerecipeItemComponent
]
})
export class HomeModule { }
