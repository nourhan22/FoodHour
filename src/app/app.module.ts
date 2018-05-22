import { IngredientListingComponent } from './ingredients/ingredient-listing/ingredient-listing.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {CuttingMethodsModule} from './cutting-methods/cutting-methods.module';
import {CuttingMethodItemComponent} from './cutting-methods/cutting-method-item/cutting-method-item.component';
import {CuttingMethodListingComponent} from './cutting-methods/cutting-method-listing/cutting-method-listing.component';
import {CuttingMethodDetailsComponent} from './cutting-methods/cutting-method-details/cutting-method-details.component';
import {ToolsModule} from './tools/tools.module';
import {ToolItemComponent} from './tools/tool-item/tool-item.component';
import {ToolListingComponent} from './tools/tool-listing/tool-listing.component';
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
<<<<<<< HEAD
import { TabsComponent } from 'src/app/micro-organisms/tabs/tabs.component';
import { MicroOrganismDetailsComponent } from 'src/app/micro-organisms/micro-organism-details/micro-organism-details.component';
import { MicroItemDescriptionComponent } from 'src/app/micro-organisms/micro-item-description/micro-item-description.component';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { RelatedtopicComponent } from 'src/app/micro-organisms/relatedtopic/relatedtopic.component';
import { MicroService } from 'src/app/shared/services/Micro.service';
import {ActivatedRoute} from '@angular/router'
=======
>>>>>>> 40c9476a7c8bef0d03c19aa845908dd82c6c40ae

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    CuttingMethodItemComponent,
    MicroOrganismListingComponent,
    MicroOrganismItemComponent,
    ToolItemComponent,
    ToolListingComponent,
    MicroOrganismListingComponent,
    CookingMethodListingComponent,
    IngredientListingComponent,
    CookingMethodItemComponent,
    FooterComponent,
    CuttingMethodListingComponent,

    CuttingMethodDetailsComponent,



    CookingMethodDetailsComponent,
    CookingMethodDetailsComponent,
    SmallHeaderComponent,
    TabsComponent,
    MicroOrganismDetailsComponent,
    MicroItemDescriptionComponent,
    SearchComponent,
    RelatedtopicComponent,


    SmallHeaderComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([


     
     {path: 'cookingMethodeListing' , component: CookingMethodItemComponent},

     {path:'microOrganismListing', component:MicroOrganismListingComponent},


     {path:'cookingMethodeListing' , component:CookingMethodItemComponent},
     {path:'ToolItem' , component:ToolItemComponent},
     {path:'ToolListing' , component:ToolListingComponent}  ,
     
     {path:'cookingMethodeListing' , component:CookingMethodListingComponent},


     {path: 'microOrganismListing', component: MicroOrganismListingComponent},
     {path: 'cookingMethodeListing' , component: CookingMethodItemComponent},
     {path: 'microOrganismListing', component: MicroOrganismListingComponent},
     {path: 'cookingMethodeListing' , component: CookingMethodListingComponent},
     {path: 'cuttingMethodListing' , component: CuttingMethodListingComponent},
     {path: 'CuttingMethodDetails' , component:CuttingMethodDetailsComponent},

     {path: 'microOrganismListing', component: MicroOrganismListingComponent},
     {path:'cookingMethodListing' , component:CookingMethodListingComponent},

     {path:'cookingMethodListing/details' , component:CookingMethodDetailsComponent},
     {path:'microOrganismListing/details/:id', component:MicroOrganismDetailsComponent},
     
     {path:'cookingMethodListing/details/:id' , component:CookingMethodDetailsComponent}


    ])
  ],
  providers: [MicroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
