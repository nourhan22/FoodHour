import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IngredientsModule } from './ingredients/ingredients.module';
import{IngredientListingComponent} from './ingredients/ingredient-listing/ingredient-listing.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
