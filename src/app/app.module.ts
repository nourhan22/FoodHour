import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './shared/components/header/header.component';

import {CuttingMethodsModule} from './cutting-methods/cutting-methods.module';
import {CuttingMethodItemComponent} from './cutting-methods/cutting-method-item/cutting-method-item.component';


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
import { CookingMethodItemComponent } from './cooking-methods/cooking-method-item/cooking-method-item.component';
import { IngredientListingComponent } from 'src/app/ingredients/ingredient-listing/ingredient-listing.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuttingMethodItemComponent,

    MicroOneItemComponent,
    MicroOrganismListingComponent,
    CookingMethodItemComponent,
    MicroOrganismItemComponent,
    ToolItemComponent,
    MicroOneItemComponent,
    MicroOrganismListingComponent,
    CookingMethodItemComponent,
    IngredientListingComponent,
    CuttingMethodItemComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
     {path:'microOrganismListing', component:MicroOrganismListingComponent},
     {path:'cookingMethodeListing' , component:CookingMethodItemComponent}
    ])
  ],
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
