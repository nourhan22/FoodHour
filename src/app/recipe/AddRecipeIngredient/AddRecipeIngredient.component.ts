import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { IRecipe } from 'src/app/shared/models/interfaces/IRecipe';
import { RecipeService } from 'src/app/shared/services/Recipe.service';
import { Router } from '@angular/router';
import { TemplateRef } from '@angular/core';
import { IRecipeIngredient } from 'src/app/shared/models/interfaces/IRecipeIngredient';
@Component({
  selector: 'app-AddRecipeIngredient',
  templateUrl: './AddRecipeIngredient.component.html',
  styleUrls: ['./AddRecipeIngredient.component.css']
})
export class AddRecipeIngredientComponent implements OnInit {  
  constructor(private recipeService: RecipeService,private router:Router) { }
  public recipeingrediant:IRecipeIngredient;
  ngOnInit() {
  }
  OnAddIngredient()
  {
    debugger;
    this.recipeService.onRecipeIngredientAdded.next(this.recipeingrediant);
    this.router.navigate(['recipeListing/add']);
  }
}
