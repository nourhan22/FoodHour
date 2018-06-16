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
      {ingredient:{name:'aaaa'}},
      {ingredient:{name:'bbbb'}}
    ];

    this.recipeService.onRecipeIngredientAdded.subscribe(
      (recipeIngredient)=>{this.ingredients.push(recipeIngredient)}
    );
  }
  openModal(template: TemplateRef<any>) {
    //this.modalRef = this.modalService.show(AddRecipeIngredientComponent)
    this.modalRef = this.modalService.show(template);
  }
  onSave()
  {
    this.recipeService.AddRecipe(this.recipeItem);
    this.router.navigate(['recipeListing']);
  }
}
