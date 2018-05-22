import { IngredientDescriptionComponent } from './ingredients/ingredient-details/ingredient-description/ingredient-description.component';
import { IngredientDetailsComponent } from './ingredients/ingredient-details/ingredient-details.component';
import { IngredientItemComponent } from './ingredients/ingredient-item/ingredient-item.component';
import { IngredientListingComponent } from './ingredients/ingredient-listing/ingredient-listing.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './shared/components/header/header.component';
import {CuttingMethodsModule} from './cutting-methods/cutting-methods.module';
import {CuttingMethodItemComponent} from './cutting-methods/cutting-method-item/cutting-method-item.component';
import {CuttingMethodListingComponent} from './cutting-methods/cutting-method-listing/cutting-method-listing.component';
import {ToolsModule} from './tools/tools.module';
import {ToolItemComponent} from './tools/tool-item/tool-item.component';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { MicroOrganismItemComponent } from 'src/app/micro-organisms/micro-organism-item/micro-organism-item.component';
import { from } from 'rxjs/internal/observable/from';
import {MicroOrganismsModule} from './micro-organisms/micro-organisms.module';
import { MicroOneItemComponent } from 'src/app/micro-organisms/micro-organism-listing/micro-one-item/micro-one-item.component';
import { MicroOrganismListingComponent } from 'src/app/micro-organisms/micro-organism-listing/micro-organism-listing.component';
import {CookingMethodsModule} from './cooking-methods/cooking-methods.module';
import { CookingMethodListingComponent } from 'src/app/cooking-methods/cooking-method-listing/cooking-method-listing.component';
import { CookingMethodItemComponent } from 'src/app/cooking-methods/cooking-method-item/cooking-method-item.component';


// import { IngredientListingComponent } from 'src/app/ingredients/ingredient-listing/ingredient-listing.component';

//import { IngredientListingComponent } from 'src/app/ingredients/ingredient-listing/ingredient-listing.component';

import {IngredientsModule} from './ingredients/ingredients.module';
import {CookingMethodDetailsComponent} from 'src/app/cooking-methods/cooking-method-details/cooking-method-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuttingMethodItemComponent,
    MicroOneItemComponent,
    MicroOrganismListingComponent,
    MicroOrganismItemComponent,
    ToolItemComponent,
    MicroOneItemComponent,
    MicroOrganismListingComponent,
    CookingMethodListingComponent,
    IngredientListingComponent,
    IngredientItemComponent,
    IngredientDetailsComponent,
    IngredientDescriptionComponent,
    CookingMethodItemComponent,
    CuttingMethodListingComponent,

    CookingMethodDetailsComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

    
     {path:'cookingMethodeListing' , component:CookingMethodItemComponent},
     {path:'IngredientListing' , component:IngredientListingComponent},
     {path:'IngredientDetails/:id' , component:IngredientDetailsComponent},
     {path: 'cookingMethodeListing' , component: CookingMethodItemComponent},
     {path: 'microOrganismListing', component: MicroOrganismListingComponent},
     {path: 'cookingMethodeListing' , component: CookingMethodListingComponent},
     {path: 'cuttingMethodListing' , component: CuttingMethodListingComponent},
     {path:'cookingMethodListing/details' , component:CookingMethodDetailsComponent}


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
