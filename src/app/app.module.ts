

import { BrowserModule } from '@angular/platform-browser';
import{HomeModule} from './home/home.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxGalleryModule } from 'ngx-gallery';

import { TabsModule } from 'ngx-bootstrap/tabs';


import{CommunityModule} from './community/community.module';
import{PostListingComponent} from './community/post-listing/post-listing.component';
import { OtherToolsComponent } from './tools/other-tools/other-tools.component';
import { IngredientDescriptionComponent } from './ingredients/ingredient-details/ingredient-description/ingredient-description.component';
import { IngredientDetailsComponent } from './ingredients/ingredient-details/ingredient-details.component';
import { IngredientItemComponent } from './ingredients/ingredient-item/ingredient-item.component';
import { IngredientListingComponent } from './ingredients/ingredient-listing/ingredient-listing.component';

import { NgModule } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CuttingMethodsModule } from './cutting-methods/cutting-methods.module';
import { CuttingMethodItemComponent } from './cutting-methods/cutting-method-item/cutting-method-item.component';
import { CuttingMethodListingComponent } from './cutting-methods/cutting-method-listing/cutting-method-listing.component';
import { CuttingMethodDetailsComponent } from './cutting-methods/cutting-method-details/cutting-method-details.component';
import { ToolsModule } from './tools/tools.module';
import { ToolItemComponent } from './tools/tool-item/tool-item.component';
import { ToolListingComponent } from './tools/tool-listing/tool-listing.component';
import { AppComponent } from './app.component';
import { MicroOrganismItemComponent } from 'src/app/micro-organisms/micro-organism-item/micro-organism-item.component';
import { from } from 'rxjs/internal/observable/from';
import { MicroOrganismsModule } from './micro-organisms/micro-organisms.module';
import { MicroOrganismListingComponent } from 'src/app/micro-organisms/micro-organism-listing/micro-organism-listing.component';
import { CookingMethodsModule } from './cooking-methods/cooking-methods.module';
import { CookingMethodListingComponent } from 'src/app/cooking-methods/cooking-method-listing/cooking-method-listing.component';
import { CookingMethodItemComponent } from 'src/app/cooking-methods/cooking-method-item/cooking-method-item.component';
import { ToolDetailesComponent } from './tools/tool-detailes/tool-detailes.component';
// import { IngredientListingComponent } from 'src/app/ingredients/ingredient-listing/ingredient-listing.component';
//import { IngredientListingComponent } from 'src/app/ingredients/ingredient-listing/ingredient-listing.component';
import { IngredientsModule } from './ingredients/ingredients.module';

import { CookingMethodDetailsComponent } from 'src/app/cooking-methods/cooking-method-details/cooking-method-details.component';
import { SmallHeaderComponent } from 'src/app/shared/components/smallHeader/smallHeader.component';
import { TabsComponent } from 'src/app/micro-organisms/tabs/tabs.component';
import { MicroOrganismDetailsComponent } from 'src/app/micro-organisms/micro-organism-details/micro-organism-details.component';
import { MicroItemDescriptionComponent } from 'src/app/micro-organisms/micro-item-description/micro-item-description.component';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { RelatedtopicComponent } from 'src/app/micro-organisms/relatedtopic/relatedtopic.component';
import { MicroService } from 'src/app/shared/services/Micro.service';

import {ActivatedRoute} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MicroOrganismAddComponent } from 'src/app/micro-organisms/micro-organism-add/micro-organism-add.component';
import { CookingMethodService } from 'src/app/shared/services/cookingMethod.service';
import { CookingMethodAddComponent } from 'src/app/cooking-methods/cooking-method-add/cooking-method-add.component';
import { RecipeDetailsComponent } from 'src/app/recipe/recipe-details/recipe-details.component';

import { IngredientAddComponent } from './ingredients/ingredient-add/ingredient-add.component';
import { IngredientNutiritionsComponent } from './ingredients/ingredient-details/ingredient-nutiritions/ingredient-nutiritions.component';
import { IngredientNutiritionItemComponent } from './ingredients/ingredient-details/ingredient-nutiritions/ingredient-nutirition-Item/ingredient-nutirition-Item.component';
import { ToolAddComponent } from './tools/tool-add/tool-add.component';



import { RecipeListingComponent } from 'src/app/recipe/recipe-listing/recipe-listing.component';
import { RecipeItemComponent } from 'src/app/recipe/recipe-item/recipe-item.component';
import { GallaryComponent } from 'src/app/recipe/recipe-details/gallary/gallary.component';
import { MainInfoComponent } from 'src/app/recipe/recipe-details/mainInfo/mainInfo.component';
import { MiniIngrediantComponent } from 'src/app/recipe/recipe-details/miniIngrediant/miniIngrediant.component';
import { NutritionComponent } from 'src/app/recipe/recipe-details/nutrition/nutrition.component';
import { PieChartComponent } from 'src/app/recipe/recipe-details/nutrition/pie-chart/pie-chart.component';
import { BarChartComponent } from 'src/app/recipe/recipe-details/nutrition/bar-chart/bar-chart.component';
import { MiniItemComponent } from 'src/app/recipe/recipe-details/miniIngrediant/miniItem/miniItem.component';
import { CuttingMethodAddComponent } from 'src/app/cutting-methods/cutting-method-add/cutting-method-add.component';
import { CutToolComponent } from 'src/app/shared/components/cutTool/cutTool.component';
import { CuttingSliderComponent } from 'src/app/cutting-methods/cutting-slider/cutting-slider.component';
import { SliderComponent } from 'src/app/home/slider/slider.component';
import { WhoWeAreComponent } from 'src/app/home/who-we-are/who-we-are.component';
import { ServicesComponent } from 'src/app/home/services/services.component';
import { ViewHomeComponent } from 'src/app/home/view-home/view-home.component';
import { PostComponent } from 'src/app/community/post/post.component';
import { DetailsComponent } from 'src/app/community/details/details.component';
import { PostContentComponent } from 'src/app/community/post-content/post-content.component';
// import { AuthorComponent } from 'src/app/community/author/author.component';
import { AuthorComponent } from 'src/app/shared/components/author/author.component';
import { CommentComponent } from 'src/app/shared/components/comment/comment.component';
// import { AddCommentComponent } from 'src/app/shared/components/add-comment/add-comment.component';
import { SmallPostComponent } from 'src/app/community/small-post/small-post.component';
import { AddCommentComponent } from 'src/app/shared/components/add-comment/add-comment.component';


import { IngredientRecipesSliderComponent } from './ingredients/ingredient-details/ingredient-recipes-slider/ingredient-recipes-slider.component';
import { UserListingComponent } from './user/user-listing/user-listing.component';
import { UserItemComponent } from './user/user-item/user-item.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserAddComponent } from './user/user-add/user-add.component';

import {StepsComponent} from 'src/app/recipe/recipe-details//miseEnPlace/steps/steps.component';
import {MiseEnPlaceComponent} from 'src/app/recipe/recipe-details/miseEnPlace/miseEnPlace.component';
import {RecipeAddComponent} from 'src/app/recipe/recipe-add/recipe-add.component';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddRecipeIngredientComponent } from 'src/app/recipe/AddRecipeIngredient/AddRecipeIngredient.component';
import { RecipeIngredientItemComponent } from 'src/app/ingredients/recipe-ingredient-item/recipe-ingredient-item.component';
import { SmallTabComponent } from 'src/app/community/small-tab/small-tab.component';
import { AddPostComponent } from 'src/app/community/addPost/addPost.component';

import { HttpModule } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
// import{HttpClientModule} from '@angular/common/http';


import { ShoppingCartComponent } from './shopping-list/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './shared/services/ShoppingCart.service';
import { ShopIngrediantComponent } from './shopping-list/shop-ingrediant/shop-ingrediant.component';
import { HomerecipeItemComponent } from './home/homerecipe-item/homerecipe-item.component';
import { HomeRecipeComponent } from './home/home-recipe/home-recipe.component';



import { RouterModule } from '@angular/router';


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

     PostListingComponent,
    IngredientRecipesSliderComponent,
    AddPostComponent,
    AddRecipeIngredientComponent,
    RecipeIngredientItemComponent,
   SmallTabComponent,
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
    OtherToolsComponent,
    RecipeDetailsComponent,
    ToolAddComponent,

    ShopIngrediantComponent,
    RecipeDetailsComponent,


    ToolAddComponent,
    HomeRecipeComponent,
    HomerecipeItemComponent,
    RecipeListingComponent,
    RecipeItemComponent,
    MainInfoComponent,
    MiniIngrediantComponent,
    GallaryComponent,
    NutritionComponent,
    PieChartComponent,
    BarChartComponent,
    MiniItemComponent,

    StepsComponent,
    MiseEnPlaceComponent,
    RecipeAddComponent,

    DetailsComponent,
    PostContentComponent,
    AuthorComponent,
    CommentComponent,
    SmallPostComponent,
    AddCommentComponent,
    PostComponent,
    PostListingComponent,
    ShoppingCartComponent,
    UserItemComponent ,
    UserListingComponent,
    UserDetailsComponent,
    UserAddComponent,
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
     PostListingComponent,
    IngredientRecipesSliderComponent,
    AddPostComponent,
    AddRecipeIngredientComponent,
    RecipeIngredientItemComponent,
   SmallTabComponent,
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


    ToolAddComponent,

    RecipeListingComponent,
    RecipeItemComponent,
    MainInfoComponent,
    MiniIngrediantComponent,
    GallaryComponent,
    NutritionComponent,
    PieChartComponent,
    BarChartComponent,
    MiniItemComponent,

    StepsComponent,
    MiseEnPlaceComponent,
    RecipeAddComponent,

    DetailsComponent,
    PostContentComponent,
    AuthorComponent,
    CommentComponent,
    SmallPostComponent,
    AddCommentComponent,

    PostComponent,

    UserItemComponent ,
    UserListingComponent,
    UserDetailsComponent,
    UserAddComponent,
    PostListingComponent,
    AddRecipeIngredientComponent,
    SmallTabComponent,
    AddPostComponent

    
  ],
  
  imports: [

    HttpModule,

    BrowserModule,
    FormsModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    NgxGalleryModule,

    RouterModule.forRoot([

      { path: 'home', component: ViewHomeComponent },
      { path: 'community', component: PostListingComponent },

      { path: 'IngredientListing', component: IngredientListingComponent },
      { path: 'IngredientDetails/:id', component: IngredientDetailsComponent },
      { path: 'IngredientListing/add', component: IngredientAddComponent },
      { path: 'IngredientListing/edit/:id', component: IngredientAddComponent },
      { path: 'microOrganismListing', component: MicroOrganismListingComponent },
      { path: 'ToolItem', component: ToolItemComponent },
      { path: 'ToolListing', component: ToolListingComponent },
      { path: 'microOrganismListing', component: MicroOrganismListingComponent },
      { path: 'cookingMethodListing', component: CookingMethodListingComponent },
      { path: 'cuttingMethodListing', component: CuttingMethodListingComponent },
      { path: 'recipeListing', component: RecipeListingComponent },
      { path: 'CuttingMethodDetails', component: CuttingMethodDetailsComponent },
      { path: 'microOrganismListing/edit/:id', component: MicroOrganismAddComponent },
      { path: 'microOrganismListing/add', component: MicroOrganismAddComponent },
      { path: 'cookingMethodListing/edit/:id', component: CookingMethodAddComponent },
      { path: 'cookingMethodListing/details', component: CookingMethodDetailsComponent },
      { path: 'cuttingMethodListing/details/:id', component: CuttingMethodDetailsComponent },
      { path: 'microOrganismListing/details/:id', component: MicroOrganismDetailsComponent },
      { path: 'cookingMethodListing/details/:id', component: CookingMethodDetailsComponent },
      { path: 'cookingMethodListing/details', component: CookingMethodDetailsComponent },
      { path: 'microOrganismListing/details/:id', component: MicroOrganismDetailsComponent },
      { path: 'cookingMethodListing/details/:id', component: CookingMethodDetailsComponent },
      { path: 'ToolListing/details/:id', component: ToolDetailesComponent },
      { path: 'cookingMethodListing/Add', component: CookingMethodAddComponent },
      { path: 'recipeListing/details/:id', component: RecipeDetailsComponent },
      { path: 'ToolListing/add', component: ToolAddComponent },
      { path: 'cuttingMethodListing/add', component: CuttingMethodAddComponent },
      { path: 'cuttingMethodListing/edit/:id', component: CuttingMethodAddComponent  },
      { path: 'ToolListing/add', component: ToolAddComponent },
      { path: 'ToolListing/edit/:id', component: ToolAddComponent },
      { path: 'recipe/details', component: RecipeDetailsComponent },
      { path: 'recipeListing/add', component: RecipeAddComponent },
   
      { path: 'ToolListing/add', component: ToolAddComponent },

      { path: 'community/details', component: DetailsComponent },

      { path: 'ToolListing/add', component: ToolAddComponent },
      { path: 'shopcategory', component: ShopIngrediantComponent },
      { path: 'ShoppingCart', component: ShoppingCartComponent },
      { path: 'community/details/:id', component: DetailsComponent },

      { path: 'home', component: ViewHomeComponent },
      { path: 'community', component: PostListingComponent },

      { path: 'IngredientListing', component: IngredientListingComponent },
      { path: 'IngredientDetails/:id', component: IngredientDetailsComponent },
      { path: 'IngredientListing/add', component: IngredientAddComponent },
      { path: 'IngredientListing/edit/:id', component: IngredientAddComponent },
      { path: 'microOrganismListing', component: MicroOrganismListingComponent },
      { path: 'ToolItem', component: ToolItemComponent },
      { path: 'ToolListing', component: ToolListingComponent },
      { path: 'microOrganismListing', component: MicroOrganismListingComponent },
      { path: 'cookingMethodListing', component: CookingMethodListingComponent },
      { path: 'cuttingMethodListing', component: CuttingMethodListingComponent },
      { path: 'recipeListing', component: RecipeListingComponent },
      { path: 'CuttingMethodDetails', component: CuttingMethodDetailsComponent },
      { path: 'microOrganismListing/edit/:id', component: MicroOrganismAddComponent },
      { path: 'microOrganismListing/add', component: MicroOrganismAddComponent },
      { path: 'cookingMethodListing/edit/:id', component: CookingMethodAddComponent },
      { path: 'cookingMethodListing/details', component: CookingMethodDetailsComponent },
      { path: 'cuttingMethodListing/details/:id', component: CuttingMethodDetailsComponent },
      { path: 'microOrganismListing/details/:id', component: MicroOrganismDetailsComponent },
      { path: 'cookingMethodListing/details/:id', component: CookingMethodDetailsComponent },
      { path: 'cookingMethodListing/details', component: CookingMethodDetailsComponent },
      { path: 'microOrganismListing/details/:id', component: MicroOrganismDetailsComponent },
      { path: 'cookingMethodListing/details/:id', component: CookingMethodDetailsComponent },
      { path: 'ToolListing/details/:id', component: ToolDetailesComponent },
      { path: 'cookingMethodListing/Add', component: CookingMethodAddComponent },
      { path: 'recipeListing/details/:id', component: RecipeDetailsComponent },
      { path: 'ToolListing/add', component: ToolAddComponent },
      { path: 'cuttingMethodListing/add', component: CuttingMethodAddComponent },
      { path: 'ToolListing/add', component: ToolAddComponent },
      { path: 'ToolListing/edit/:id', component: ToolAddComponent },
      { path: 'recipe/details', component: RecipeDetailsComponent },
      { path: 'recipeListing/add', component: RecipeAddComponent },

      { path: 'ToolListing/add', component: ToolAddComponent },

      { path: 'ToolListing/add', component: ToolAddComponent },
      { path: 'community/details/:id', component: DetailsComponent },

     
     {path:'home', component:ViewHomeComponent},
     {path:'community', component:PostListingComponent},
  
     {path:'IngredientListing', component:IngredientListingComponent},
     {path:'IngredientDetails/:id' , component:IngredientDetailsComponent},
     {path:'IngredientListing/add' , component:IngredientAddComponent},
     {path:'IngredientListing/edit/:id' , component:IngredientAddComponent},
     {path:'microOrganismListing', component:MicroOrganismListingComponent},
     {path:'ToolItem' , component:ToolItemComponent},
     {path:'ToolListing' , component:ToolListingComponent},
     {path: 'microOrganismListing', component: MicroOrganismListingComponent},
     {path: 'cookingMethodListing' , component: CookingMethodListingComponent},
     {path: 'cuttingMethodListing' , component: CuttingMethodListingComponent},
     {path: 'recipeListing' , component: RecipeListingComponent},
     {path: 'CuttingMethodDetails' , component:CuttingMethodDetailsComponent},
     {path:'microOrganismListing/edit/:id' , component:MicroOrganismAddComponent},
     {path:'microOrganismListing/add' , component:MicroOrganismAddComponent},
     {path:'cookingMethodListing/edit/:id' , component:CookingMethodAddComponent},
     {path:'cookingMethodListing/details' , component:CookingMethodDetailsComponent},
     {path:'cuttingMethodListing/details/:id', component:CuttingMethodDetailsComponent},
     {path:'microOrganismListing/details/:id', component:MicroOrganismDetailsComponent},
     {path:'cookingMethodListing/details/:id' , component:CookingMethodDetailsComponent},
     {path:'cookingMethodListing/details' , component:CookingMethodDetailsComponent},
     {path:'microOrganismListing/details/:id', component:MicroOrganismDetailsComponent},
     {path:'cookingMethodListing/details/:id' , component:CookingMethodDetailsComponent},
     {path:'ToolListing/details/:id',component:ToolDetailesComponent},
     {path:'cookingMethodListing/Add' , component:CookingMethodAddComponent},
     {path:'recipeListing/details/:id',component:RecipeDetailsComponent},
     {path:'ToolListing/add' , component:ToolAddComponent},
     {path:'cuttingMethodListing/add' , component:CuttingMethodAddComponent},
     {path:'ToolListing/add' , component:ToolAddComponent},
     {path:'ToolListing/edit/:id',component:ToolAddComponent},
     {path:'recipe/details',component:RecipeDetailsComponent},
     {path:'recipeListing/add',component:RecipeAddComponent},

     {path:'ToolListing/add' , component:ToolAddComponent},

     {path:'ToolListing/add' , component:ToolAddComponent},
     {path:'community/details/:id' , component:DetailsComponent},
     {path:'user',component:UserListingComponent},
     {path:"UserDetails/:id",component:UserDetailsComponent},
     { path: 'user/add', component: UserAddComponent },
     { path: 'user/edit/:id', component:UserAddComponent }
    ])
  ],
  providers: [MicroService, CookingMethodService],
  bootstrap: [AppComponent]
})
export class AppModule { }