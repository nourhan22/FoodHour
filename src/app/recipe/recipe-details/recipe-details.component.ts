import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService} from 'src/app/shared/services/Recipe.service';
import { IRecipe } from 'src/app/shared/models/interfaces/IRecipe';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  public RecipeItem : IRecipe;
  private id :number;
  constructor(private ActivatedRoute:ActivatedRoute, private RecipeService:RecipeService) {
    this.ActivatedRoute.params.subscribe(
      
       (params)=>{  this.id = params['id'];}
     )
     this.RecipeItem = this.RecipeService.GetbyId(this.id); 
  
   }

  ngOnInit() {
    
}
}
