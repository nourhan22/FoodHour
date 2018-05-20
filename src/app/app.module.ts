import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IngredientsModule } from './ingredients/ingredients.module';
import{IngredientListingComponent} from './ingredients/ingredient-listing/ingredient-listing.component';
import {CuttingMethodsModule} from './cutting-methods/cutting-methods.module';
import {CuttingMethodItemComponent} from './cutting-methods/cutting-method-item/cutting-method-item.component';
import {ToolsModule} from './tools/tools.module';
import {ToolItemComponent} from'./tools/tool-item/tool-item.component';
import { AppComponent } from './app.component';
import { from } from 'rxjs/internal/observable/from';
import {MicroOrganismsModule} from './micro-organisms/micro-organisms.module';
import { MicroOneItemComponent } from 'src/app/micro-organisms/micro-organism-listing/micro-one-item/micro-one-item.component';
import { MicroOrganismListingComponent } from 'src/app/micro-organisms/micro-organism-listing/micro-organism-listing.component';
import {CookingMethodsModule} from './cooking-methods/cooking-methods.module';
import { CookingMethodItemComponent } from './cooking-methods/cooking-method-item/cooking-method-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CuttingMethodItemComponent,
    ToolItemComponent,
    MicroOneItemComponent,
    MicroOrganismListingComponent,
    CookingMethodItemComponent,
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
