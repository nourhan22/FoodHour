import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IngredientsModule } from './ingredients/ingredients.module';
import{IngredientListingComponent} from './ingredients/ingredient-listing/ingredient-listing.component';
import {CuttingMethodsModule} from './cutting-methods/cutting-methods.module';
<<<<<<< HEAD
<<<<<<< HEAD
import {CuttingMethodItemComponent} from './cutting-methods/cutting-method-item/cutting-method-item.component';
import {MicroOrganismsModule} from './micro-organisms/micro-organisms.module'
import { AppComponent } from './app.component';

import { MicroOneItemComponent } from 'src/app/micro-organisms/micro-organism-listing/micro-one-item/micro-one-item.component';
import { MicroOrganismListingComponent } from 'src/app/micro-organisms/micro-organism-listing/micro-organism-listing.component';
=======

=======
import {CookingMethodsModule} from './cooking-methods/cooking-methods.module';
>>>>>>> 56cd8a2e346c44652eb8530bb936a752cd0900a3
import {CuttingMethodItemComponent} from './cutting-methods/cutting-method-item/cutting-method-item.component';
//import { CookingMethodItemComponent } from './cooking-methods/cooking-method-item/cooking-method-item.component';
import { AppComponent } from './app.component';

>>>>>>> ac56b5e156eedb8275f1791621d5f469aacff10e

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CuttingMethodItemComponent,
<<<<<<< HEAD
    MicroOneItemComponent,
    MicroOrganismListingComponent
=======
    CookingMethodItemComponent
>>>>>>> ac56b5e156eedb8275f1791621d5f469aacff10e
=======
    IngredientListingComponent,
    CuttingMethodItemComponent
>>>>>>> 103ea60557026121aa67f9d705e9c17d184283f6
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
