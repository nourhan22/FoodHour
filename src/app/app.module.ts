import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IngredientsModule } from './ingredients/ingredients.module';
import{IngredientListingComponent} from './ingredients/ingredient-listing/ingredient-listing.component';
import {CuttingMethodsModule} from './cutting-methods/cutting-methods.module';
import {CuttingMethodItemComponent} from './cutting-methods/cutting-method-item/cutting-method-item.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientListingComponent,
    CuttingMethodItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
