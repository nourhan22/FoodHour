import { IngredientListingComponent } from './ingredients/ingredient-listing/ingredient-listing.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './shared/components/header/header.component';
import {CuttingMethodsModule} from './cutting-methods/cutting-methods.module';
import {CuttingMethodItemComponent} from './cutting-methods/cutting-method-item/cutting-method-item.component';
import {CuttingMethodListingComponent} from './cutting-methods/cutting-method-listing/cutting-method-listing.component';
import {CuttingMethodDetailsComponent} from './cutting-methods/cutting-method-details/cutting-method-details.component';
import {ToolsModule} from './tools/tools.module';
import {ToolItemComponent} from './tools/tool-item/tool-item.component';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { MicroOrganismItemComponent } from 'src/app/micro-organisms/micro-organism-item/micro-organism-item.component';
import { from } from 'rxjs/internal/observable/from';
import {MicroOrganismsModule} from './micro-organisms/micro-organisms.module';
import { MicroOrganismListingComponent } from 'src/app/micro-organisms/micro-organism-listing/micro-organism-listing.component';
import {CookingMethodsModule} from './cooking-methods/cooking-methods.module';
import { CookingMethodListingComponent } from 'src/app/cooking-methods/cooking-method-listing/cooking-method-listing.component';
import { CookingMethodItemComponent } from 'src/app/cooking-methods/cooking-method-item/cooking-method-item.component';


// import { IngredientListingComponent } from 'src/app/ingredients/ingredient-listing/ingredient-listing.component';

//import { IngredientListingComponent } from 'src/app/ingredients/ingredient-listing/ingredient-listing.component';

import {IngredientsModule} from './ingredients/ingredients.module';
import {CookingMethodDetailsComponent} from 'src/app/cooking-methods/cooking-method-details/cooking-method-details.component';
import { SmallHeaderComponent } from 'src/app/shared/components/smallHeader/smallHeader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuttingMethodItemComponent,
    MicroOrganismListingComponent,
    MicroOrganismItemComponent,
    ToolItemComponent,
    MicroOrganismListingComponent,
    CookingMethodListingComponent,
    IngredientListingComponent,
    CookingMethodItemComponent,

    CuttingMethodListingComponent,
    CuttingMethodDetailsComponent,

    CookingMethodDetailsComponent,
    SmallHeaderComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([


     {path: 'microOrganismListing', component: MicroOrganismListingComponent},
     {path: 'cookingMethodeListing' , component: CookingMethodItemComponent},
     {path: 'microOrganismListing', component: MicroOrganismListingComponent},
     {path: 'cookingMethodeListing' , component: CookingMethodListingComponent},
     {path: 'cuttingMethodListing' , component: CuttingMethodListingComponent},
     {path: 'CuttingMethodDetails' , component:CuttingMethodDetailsComponent},

     {path: 'microOrganismListing', component: MicroOrganismListingComponent},
     {path:'cookingMethodListing' , component:CookingMethodListingComponent},
     {path:'cookingMethodListing/details' , component:CookingMethodDetailsComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
