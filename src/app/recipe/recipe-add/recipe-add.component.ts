import { Component, OnInit ,TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { IRecipe } from 'src/app/shared/models/interfaces/IRecipe';
import { RecipeService } from 'src/app/shared/services/Recipe.service';
import { Router } from '@angular/router';
import { AddRecipeIngredientComponent } from 'src/app/recipe/AddRecipeIngredient/AddRecipeIngredient.component';
import { IRecipeIngredient } from 'src/app/shared/models/interfaces/IRecipeIngredient';
@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {
  recipeItem:IRecipe;
  modalRef: BsModalRef;
  ingredients: IRecipeIngredient[];
  constructor(private modalService: BsModalService,private recipeService:RecipeService,private router:Router  ) { }

  ngOnInit() {
    this.recipeItem = {};

    this.ingredients= [
    ];

    this.recipeService.onRecipeIngredientAdded.subscribe(
      (recipeIngredient)=>{ debugger; this.ingredients.push(recipeIngredient) ;console.log(this.ingredients)}
    );
  }
  openModal(template: TemplateRef<any>) {
    //this.modalRef = this.modalService.show(AddRecipeIngredientComponent)
    this.modalRef = this.modalService.show(template);
  }
  onSave()
  {
    this.recipeItem.id = this.recipeService.Recipes.length + 1;
    this.recipeItem.ingredients = this.ingredients;
    this.recipeItem.imageUrl = "../../../assets/images/cooking method/grill.jpg";
    this.recipeItem.imageArr = [{small:"../../../assets/images/cooking method/grill.jpg",
                                 medium:"../../../assets/images/cooking method/grill.jpg",
                                 big:"../../../assets/images/cooking method/grill.jpg"}];
    this.recipeItem.comments = [];
    this.recipeItem.steps = [];
    this.recipeItem.date = {day:20,month:"JUN"} ;
    this.recipeItem.nutritions ={VITAMINS:[],MINERALS:[],Cal:[]};
    this.recipeItem.author = {image:"../assets/images/default.png",username:"USER"}                            
    this.recipeService.AddRecipe(this.recipeItem);
    this.router.navigate(['recipeListing']);
  }
}
