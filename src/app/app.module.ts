import{HomeModule} from './home/home.module';


import { IngredientDescriptionComponent } from './ingredients/ingredient-details/ingredient-description/ingredient-description.component';
import { IngredientDetailsComponent } from './ingredients/ingredient-details/ingredient-details.component';
import { IngredientItemComponent } from './ingredients/ingredient-item/ingredient-item.component';
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
import {ToolDetailesComponent} from './tools/tool-detailes/tool-detailes.component';
// import { IngredientListingComponent } from 'src/app/ingredients/ingredient-listing/ingredient-listing.component';
//import { IngredientListingComponent } from 'src/app/ingredients/ingredient-listing/ingredient-listing.component';
import {IngredientsModule} from './ingredients/ingredients.module';

import {CookingMethodDetailsComponent} from 'src/app/cooking-methods/cooking-method-details/cooking-method-details.component';
import { SmallHeaderComponent } from 'src/app/shared/components/smallHeader/smallHeader.component';
import { TabsComponent } from 'src/app/micro-organisms/tabs/tabs.component';
import { MicroOrganismDetailsComponent } from 'src/app/micro-organisms/micro-organism-details/micro-organism-details.component';
import { MicroItemDescriptionComponent } from 'src/app/micro-organisms/micro-item-description/micro-item-description.component';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { RelatedtopicComponent } from 'src/app/micro-organisms/relatedtopic/relatedtopic.component';
import { MicroService } from 'src/app/shared/services/Micro.service';
import {ActivatedRoute} from '@angular/router'
import {FormsModule} from '@angular/forms'
import { MicroOrganismAddComponent } from 'src/app/micro-organisms/micro-organism-add/micro-organism-add.component';
import { CookingMethodService } from 'src/app/shared/services/cookingMethod.service';
import {CookingMethodAddComponent}from 'src/app/cooking-methods/cooking-method-add/cooking-method-add.component';
import { RecipeDetailsComponent } from 'src/app/recipe/recipe-details/recipe-details.component';

import { IngredientAddComponent } from './ingredients/ingredient-add/ingredient-add.component';
import { IngredientNutiritionsComponent } from './ingredients/ingredient-details/ingredient-nutiritions/ingredient-nutiritions.component';
import { IngredientNutiritionItemComponent } from './ingredients/ingredient-details/ingredient-nutiritions/ingredient-nutirition-Item/ingredient-nutirition-Item.component';
import { ToolAddComponent } from './tools/tool-add/tool-add.component';
import { CuttingMethodAddComponent } from 'src/app/cutting-methods/cutting-method-add/cutting-method-add.component';
import { CutToolComponent } from 'src/app/shared/components/cutTool/cutTool.component';
import { CuttingSliderComponent } from 'src/app/cutting-methods/cutting-slider/cutting-slider.component';
import { SliderComponent } from 'src/app/home/slider/slider.component';
import { WhoWeAreComponent } from 'src/app/home/who-we-are/who-we-are.component';
import { ServicesComponent } from 'src/app/home/services/services.component';
import { ViewHomeComponent } from 'src/app/home/view-home/view-home.component';
import { DetailsComponent } from 'src/app/community/details/details.component';
import { PostContentComponent } from 'src/app/community/post-content/post-content.component';
import { AuthorComponent } from 'src/app/community/author/author.component';
import { CommentComponent } from 'src/app/shared/components/comment/comment.component';
// import { AddCommentComponent } from 'src/app/shared/components/add-comment/add-comment.component';
import { SmallPostComponent } from 'src/app/community/small-post/small-post.component';
import { AddCommentComponent } from 'src/app/shared/components/add-comment/add-comment.component';




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
    IngredientItemComponent,
    IngredientDetailsComponent,
    IngredientDescriptionComponent,
    IngredientAddComponent,
    IngredientNutiritionsComponent,
    IngredientNutiritionItemComponent,
    CookingMethodItemComponent,
    FooterComponent,
    CuttingMethodListingComponent,
    CuttingMethodDetailsComponent,
    CookingMethodDetailsComponent,
    CookingMethodDetailsComponent,
    ToolDetailesComponent,
    SmallHeaderComponent,
    TabsComponent,
    MicroOrganismDetailsComponent,
    MicroItemDescriptionComponent,
    SearchComponent,
    RelatedtopicComponent,
    MicroOrganismAddComponent,
    CookingMethodAddComponent,

    ToolAddComponent,
    CuttingMethodAddComponent,
    CutToolComponent,
    CuttingSliderComponent,
    SliderComponent,
    WhoWeAreComponent,
    ServicesComponent,
    ViewHomeComponent,

    RecipeDetailsComponent,
    DetailsComponent,
    PostContentComponent,
    AuthorComponent,
    CommentComponent,
    SmallPostComponent,
    AddCommentComponent


  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot([
     {path:'home', component:ViewHomeComponent},
     
     {path:'IngredientListing', component:IngredientListingComponent},
     {path:'IngredientDetails/:id' , component:IngredientDetailsComponent},
     {path:'IngredientListing/add' , component:IngredientAddComponent},
     {path:'microOrganismListing', component:MicroOrganismListingComponent},
     {path:'ToolItem' , component:ToolItemComponent},
     {path:'ToolListing' , component:ToolListingComponent}  ,
     {path: 'microOrganismListing', component: MicroOrganismListingComponent},
     {path: 'cookingMethodListing' , component: CookingMethodListingComponent},
     {path: 'cuttingMethodListing' , component: CuttingMethodListingComponent},
     {path: 'CuttingMethodDetails' , component:CuttingMethodDetailsComponent},
     {path:'microOrganismListing/edit/:id' , component:MicroOrganismAddComponent},
     {path:'microOrganismListing/add' , component:MicroOrganismAddComponent},
     {path:'cookingMethodListing/details' , component:CookingMethodDetailsComponent},
     {path:'cuttingMethodListing/details/:id', component:CuttingMethodDetailsComponent},
     
     {path:'microOrganismListing/details/:id', component:MicroOrganismDetailsComponent},
     {path:'microOrganismListing/details/:id', component:MicroOrganismDetailsComponent},
     {path:'cookingMethodListing/details/:id' , component:CookingMethodDetailsComponent},
     {path:'cookingMethodListing/details' , component:CookingMethodDetailsComponent},
     {path:'microOrganismListing/details/:id', component:MicroOrganismDetailsComponent},
     {path:'cookingMethodListing/details/:id' , component:CookingMethodDetailsComponent},
     {path:'ToolListing/details/:id',component:ToolDetailesComponent},
     {path:'cookingMethodListing/Add' , component:CookingMethodAddComponent},

     {path:'cuttingMethodListing/add' , component:CuttingMethodAddComponent},


     {path:'ToolListing/add' , component:ToolAddComponent},
     {path:'ToolListing/edit/:id',component:ToolAddComponent},

     {path:'recipe/details',component:RecipeDetailsComponent},

     {path:'ToolListing/add' , component:ToolAddComponent},
     {path:'community/details' , component:DetailsComponent}
     

    ])
  ],
  providers: [MicroService,CookingMethodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
